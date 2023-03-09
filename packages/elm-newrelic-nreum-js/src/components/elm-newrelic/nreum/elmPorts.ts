import { addPageAction, addRelease, interaction, noticeError, routeName } from './trackingSend';
import type {
  CSPEvent,
  ElmPortsToJS,
  ElmUniquePortToJS,
  NREUMAddPageActionPayload,
  NREUMAddReleasePayload,
  NREUMInteractionPayload,
  NREUMNoticeErrorPayload,
  NREUMPortPayload,
  NREUMRouteNamePayload,
} from './types.d';

/**
 * Try to track SCP error to RUM & Session Replay
 *
 * @param console - Enable console log, default false
 */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export const cspEvent: CSPEvent = (console = false) => {
  if (typeof window !== 'object') {
    // does not appear to be a browser environment
    throw new Error('This code is only meant to run in a browser environment');
  }

  if ('SecurityPolicyViolationEvent' in window) {
    window.document.addEventListener('securitypolicyviolation', (e) => {
      const obj = {
        blockedURI: e.blockedURI,
        effectiveDirective: e.effectiveDirective,
        message: 'SecurityPolicyViolationEvent @CSP',
        originalPolicy: e.originalPolicy,
        url: document.location.pathname,
        violatedDirective: e.violatedDirective,
      };

      noticeError(
        {
          additionalData: obj,
          errorPrefix: 'csp_violation',
          errorStackTrace: `${e.blockedURI} blocked by ${e.violatedDirective} directive`,
          type_: 'notice_error',
        },
        console,
      );
    });
  }
};

/**
 * After initialize NREUM and ELM App, you can push MSG to JS and try to read
 *
 * @param elmApp - Current Elm Application
 * @param console - Enable console log, default false
 */
/* eslint-disable @typescript-eslint/no-unsafe-call */
export const elmPortsToJS: ElmPortsToJS = (elmApp, console = false) => {
  if (typeof window !== 'object') {
    // does not appear to be a browser environment
    throw new Error('This code is only meant to run in a browser environment');
  }

  if (elmApp.ports.routeNamePort_ !== undefined) {
    elmApp.ports.routeNamePort_.subscribe((payload: NREUMRouteNamePayload) => {
      routeName(payload, console);
    });
  }

  if (elmApp.ports.interactionPort_ !== undefined) {
    elmApp.ports.interactionPort_.subscribe((payload: NREUMInteractionPayload) => {
      interaction(payload, console);
    });
  }

  if (elmApp.ports.noticeErrorPort_ !== undefined) {
    elmApp.ports.noticeErrorPort_.subscribe((payload: NREUMNoticeErrorPayload) => {
      noticeError(payload, console);
    });
  }

  if (elmApp.ports.addPageActionPort_ !== undefined) {
    elmApp.ports.addPageActionPort_.subscribe((payload: NREUMAddPageActionPayload) => {
      addPageAction(payload, console);
    });
  }

  if (elmApp.ports.addReleasePort_ !== undefined) {
    elmApp.ports.addReleasePort_.subscribe((payload: NREUMAddReleasePayload) => {
      addRelease(payload, console);
    });
  }
};

/**
 * Alternative method with you can push MSG to JS
 *
 * @param elmApp - Current Elm Application
 * @param console - Enable console log, default false
 */
/* eslint-disable @typescript-eslint/no-unsafe-call */
export const elmUniquePortToJS: ElmUniquePortToJS = (elmApp, console = false) => {
  if (typeof window !== 'object') {
    // does not appear to be a browser environment
    throw new Error('This code is only meant to run in a browser environment');
  }

  if (elmApp.ports.nreumPort_ !== undefined) {
    elmApp.ports.nreumPort_.subscribe((payload: NREUMPortPayload) => {
      switch (payload.type_) {
        case 'route_name':
          routeName(payload, console);
          break;

        case 'interaction':
          interaction(payload, console);
          break;

        case 'page_action':
          addPageAction(payload, console);
          break;

        case 'notice_error':
          noticeError(payload, console);
          break;

        case 'release':
          addRelease(payload, console);
          break;
      }
    });
  }
};
