import type { ElmApp } from '@types/elm'

/* eslint-disable @typescript-eslint/no-explicit-any */
export type CSPEvent = (console?: boolean) => void;
export type ElmPortsToJS = (elmApp: ElmApp, console?: boolean) => void;
export type ElmUniquePortToJS = (elmApp: ElmApp, console?: boolean) => void;

export type RouteNamePort = (payload: NREUMRouteNamePayload, console?: boolean) => void;
export type InteractionPort = (payload: NREUMInteractionPayload, console?: boolean) => void;
export type AddPageActionPort = (payload: NREUMAddPageActionPayload, console?: boolean) => void;
export type NoticeErrorPort = (payload: NREUMNoticeErrorPayload, console?: boolean) => void;
export type AddReleasePort = (payload: NREUMAddReleasePayload, console?: boolean) => void;

/**
 * Utility type for typescript version of elm union type
 */
export type ElmTaggedType = { type_: string };

export type NREUMPortPayload =
  | NREUMRouteNamePayload
  | NREUMInteractionPayload
  | NREUMAddPageActionPayload
  | NREUMNoticeErrorPayload
  | NREUMAddReleasePayload;

interface NREUMRouteNamePayload extends ElmTaggedType {
  routeName: string;
  type_: 'route_name';
}

interface NREUMInteractionPayload extends ElmTaggedType {
  additionalData: any;
  interactionMessage: string?;
  interactionName: string;
  type_: 'interaction';
}

interface NREUMAddPageActionPayload extends ElmTaggedType {
  actionName: string;
  additionalData: any;
  type_: 'page_action';
}

interface NREUMNoticeErrorPayload extends ElmTaggedType {
  additionalData: any;
  errorPrefix: string;
  errorStackTrace: string;
  type_: 'notice_error';
}

interface NREUMAddReleasePayload extends ElmTaggedType {
  releaseName: string;
  releaseVersion: string;
  type_: 'release';
}
