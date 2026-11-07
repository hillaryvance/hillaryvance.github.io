import { rm } from "node:fs/promises";
import { URL } from "node:url";

// Remove only generated output so deployments do not accumulate stale assets.
await rm(new URL("../dist", import.meta.url), { recursive: true, force: true });
