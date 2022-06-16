import type { ElmApp } from '@types/elm';

/* eslint-disable @typescript-eslint/no-explicit-any */
export type CSPEvent = (console?: boolean) => void;
export type ElmPortsToJS = (elmApp: ElmApp, console?: boolean) => void;

export type TrackCurrentRouteNamePayload = {
  viewName: string;
};
export type TrackInteractionPayload = {
  customAction: string;
  customData: any;
};
export type TrackPageActionPayload = {
  contextKey: string;
  contextValue: string;
  additionalData: any;
};
export type TrackNoticeErrorPayload = {
  customMessage: string;
  customError: string;
  url: string;
};
export type TrackReleasePayload = {
  id: string;
  additionalData: any;
};

export type TrackCurrentRouteName = (payload: TrackCurrentRouteNamePayload) => void;
export type TrackInteraction = (payload: TrackInteractionPayload) => void;
export type TrackPageAction = (payload: TrackPageActionPayload) => void;
export type TrackNoticeError = (payload: TrackNoticeErrorPayload) => void;
export type TrackRelease = (payload: TrackReleasePayload) => void;
