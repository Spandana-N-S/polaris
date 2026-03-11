import { Inngest } from "inngest";
import { sentryMiddleware } from "@inngest/middleware-sentry";

// Create a client to send and receive events
// This connects to your Inngest dev server at port 8288
export const inngest = new Inngest({ 
  id: "polaris",
  middleware: [sentryMiddleware()],
  inngestBaseUrl: "http://localhost:8288",
});

