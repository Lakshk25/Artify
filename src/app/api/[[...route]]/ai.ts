import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { replicate } from "@/lib/replicate";

const app = new Hono().post(
  "/generate-image",
  zValidator(
    "json",
    z.object({
      prompt: z.string(),
    })
  ),
  async (c) => {
    const { prompt } = c.req.valid("json");

    const input = {
      prompt: prompt,
    };

    const output = await replicate.run("stability-ai/stable-diffusion-3", {
      input,
    });
    const res = output as Array<string>;

    return c.json({ data: res[0] });
  }
);

export default app;
