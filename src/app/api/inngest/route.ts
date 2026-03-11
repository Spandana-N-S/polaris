import { serve } from "inngest/next";

import { inngest } from "@/inngest/client";
import { demoGenerate, demoError } from "@/app/api/inngest/functions";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    demoGenerate,
    demoError,
  ],
});

