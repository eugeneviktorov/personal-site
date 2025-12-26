import { api } from "./api";
import { IFeedback } from "./feedbackApi.types";

export const feedbackApi = api.injectEndpoints({
  endpoints: (build) => ({
    sendFeedback: build.mutation<void, IFeedback>({
      query: (body) => ({
        url: "/feedback",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSendFeedbackMutation } = feedbackApi;
