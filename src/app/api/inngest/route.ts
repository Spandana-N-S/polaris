import { serve } from "inngest/next";

import { inngest } from "@/inngest/client";
import { demoGenerate } from "@/app/api/inngest/functions";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    demoGenerate,
  ],
});

