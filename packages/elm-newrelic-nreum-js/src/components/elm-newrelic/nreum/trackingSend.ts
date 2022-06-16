import type {
  TrackCurrentRouteName,
  TrackPageAction,
  TrackInteraction,
  TrackNoticeError,
  TrackRelease,
} from './types.d';

/**
 * Try to track routing path name to RUM
 *
 * @param payload Custom Payload for current tracking
 */
export const trackCurrentRouteName: TrackCurrentRouteName = (payload) => {
  datadogRum.startView(payload.viewName);
};

/**
 * Try to track Global Context to RUM
 *
 * @param payload Custom Payload for current tracking
 */
export const trackPageAction: TrackPageAction = (payload) => {
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  const obj = {
    ...{ contextKey: payload.contextKey, contextValue: payload.contextValue },
    ...payload.additionalData,
  };

  /* eslint-disable @typescript-eslint/no-unsafe-argument */
  datadogRum.setRumPageAction(obj);
};

/**
 * Try to track Custom Action to RUM
 *
 * @param payload Custom Payload for current tracking
 */
export const trackInteraction: TrackInteraction = (payload) => {
  datadogRum.addAction(payload.customAction, payload.customData);
};

/**
 * Try to track error to RUM
 *
 * @param payload Custom Payload for current tracking
 */
export const trackNoticeError: TrackNoticeError = (payload) => {
  datadogRum.addError(new Error(`${payload.customError}`), {
    message: payload.customMessage,
    url: payload.url,
  });
};

/**
 * Try to identify User to RUM
 *
 * @param payload Custom Payload for current tracking
 */
export const trackRelease: TrackRelease = (payload) => {
  const obj = { ...{ email: payload.id }, ...payload.additionalData };

  datadogRum.setUser(obj);
};
