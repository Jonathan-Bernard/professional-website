// middleware.js

import { NextResponse } from "next/server";

export function middleware(request) {
  // Si la requête est destinée aux images Strapi, modifiez les en-têtes
  if (request.url.includes("strapi-john-dev.onrender.com/uploads")) {
    const modifiedHeaders = new Headers(request.headers);
    modifiedHeaders.set("Origin", "https://john-dev.fr");

    // Créez une nouvelle requête avec les en-têtes modifiés
    const modifiedRequest = new Request(request.url, {
      headers: modifiedHeaders,
      method: request.method,
      body: request.body,
    });

    return fetch(modifiedRequest)
      .then((response) => NextResponse.rewrite(response.url))
      .catch((error) => {
        console.error("Erreur dans le middleware :", error);
        return NextResponse.error();
      });
  }

  return NextResponse.next();
}
