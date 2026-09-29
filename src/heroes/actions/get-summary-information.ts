import { heroApi } from "../api/Hero.api";
import type { SummaryInformationResponse } from "../types/SummaryInformation.response";

export const getSummary = async () => {
  const { data } = await heroApi.get<SummaryInformationResponse>("/summary");

  return data;
};
