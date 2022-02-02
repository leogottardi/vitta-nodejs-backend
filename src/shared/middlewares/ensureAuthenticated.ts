import { vitta_sso } from "../../config/axios";
import { AppError } from "../../errors/AppError";
import { NextFunction, Request, Response } from "express";
import { decode, verify } from "jsonwebtoken";

const getPublicKey = async (keyId: string) => {
  let response: any;

  try {
    response = await vitta_sso.get("auth/realms/careers/protocol/openid-connect/certs");
  } catch {
    throw new AppError("SSO Indisponível", 502);
  }

  let keys = response.data.keys;

  const key = keys.find(k => k.kid === keyId);

  if (key) {
    const publicKey =
      `
-----BEGIN CERTIFICATE-----
${key.x5c}
-----END CERTIFICATE-----
`;

    return publicKey;
  } else {
    throw new AppError("not authorized", 401);
  }
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("token missing", 401);
  }

  const [, accessToken] = authHeader.split(" ");
  const token = decode(accessToken, { complete: true });

  if (!token) {
    throw new AppError("invalid token", 401)
  }

  const keyId = token.header.kid;

  const publicKey = await getPublicKey(keyId);

  try {
    verify(accessToken, publicKey);
    return next();
  } catch (err) {
    throw new AppError("not authorized", 401);
  }
}