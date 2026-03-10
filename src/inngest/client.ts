import { Inngest } from "inngest";

// Create a client to send and receive events
// This connects to your Inngest dev server at port 8288
export const inngest = new Inngest({ 
  id: "polaris",
  inngestBaseUrl: "http://localhost:8288",
});

