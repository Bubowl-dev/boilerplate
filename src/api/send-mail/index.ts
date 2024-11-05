import { api } from "..";
import type { SendMailRequest } from "./request";
import type { SendMailResponse } from "./response";

export const sendMail = async (request: SendMailRequest): Promise<void> => {
  const payload = {
    project: "https://andrade-gisper.vercel.app",
    attrs: [
      { content: request.name, field: 9 },
      { content: request.email, field: 11 },
      { content: request.phone, field: 10 },
      { content: request.message, field: 12 },
    ],
    is_alemao: true,
  };

  const { data } = await api.post<SendMailResponse>("/leads", payload, {
    headers: { "Content-Type": "application/json" },
  });

  if (data.id) {
    return Promise.resolve();
  }

  return Promise.reject(new Error());
};
