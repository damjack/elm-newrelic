import {
  trackCurrentRouteName,
  trackInteraction,
  trackNoticeError,
  trackPageAction,
  trackRelease,
} from './trackingSend';
import type {
  CSPEvent,
  ElmPortsToJS,
  TrackCurrentRouteName,
  TrackInteraction,
  TrackNoticeError,
  TrackPageAction,
  TrackRelease,
} from './types.d';

/**
 * Try to track SCP error to RUM & Session Replay
 *
 * @param console Enable console log, default false
 */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export const cspEvent: CSPEvent = (console = false) => {
  if (typeof window !== 'object') {
    // does not appear to be a browser environment
    throw new Error('This code is only meant to run in a browser environment');
  }

  if ('NREUM' in window) {
    if ('SecurityPolicyViolationEvent' in window) {
      window.document.addEventListener('securitypolicyviolation', (e) => {
        const obj = {
          message: 'SecurityPolicyViolationEvent @CSP',
          blockedURI: e.blockedURI,
          violatedDirective: e.violatedDirective,
          originalPolicy: e.originalPolicy,
          effectiveDirective: e.effectiveDirective,
          url: document.location.pathname,
        };

        if (!console) {
          window.NREUM.noticeError(
            new Error(
              `blockedURI: ${e.blockedURI}, violatedDirective: ${e.violatedDirective}, originalPolicy: ${e.originalPolicy}, effectiveDirective: ${e.effectiveDirective}`,
            ),
            obj,
          );
        } else {
          window.console.log('SecurityPolicyViolationEvent: ', obj);
        }
      });
    }
  }
};

/**
 * After initialize NREUM and ELM App, you can push MSG to JS and try to read
 *
 * @param elmApp Current Elm Application
 * @param console Enable console log, default false
 */
/* eslint-disable @typescript-eslint/no-unsafe-call */
export const elmPortsToJS: ElmPortsToJS = (elmApp, console = false) => {
  if ('NREUM' in window) {
    if (elmApp.ports.trackCurrentRouteName !== undefined) {
      elmApp.ports.trackCurrentRouteName.subscribe((payload) => {
        if (!console) {
          window.NREUM.setCurrentRouteName(payload.routeName); // eslint-disable-line no-undef
        } else {
          window.console.log('trackCurrentRouteName');
        }
      });
    }

    if (elmApp.ports.trackInteraction !== undefined) {
      elmApp.ports.trackInteraction.subscribe((payload) => {
        if (!console) {
          const interaction = window.NREUM.interaction(); // eslint-disable-line no-undef
          if (payload.actionText !== undefined) {
            interaction.actionText(payload.actionText);
          }
          interaction.setName(payload.interactionName);
          payload.interactionAttributes.forEach((attr) => {
            interaction.setAttribute(attr.key, attr.value);
          });
          interaction.setAttribute('version', version);
          interaction.save().end();
        } else {
          window.console.log('trackInteraction');
        }
      });
    }

    if (elmApp.ports.trackNoticeError !== undefined) {
      elmApp.ports.trackNoticeError.subscribe((payload) => {
        /* eslint-disable no-undef */
        NREUM.noticeError(new Error(`${payload.noticeError}`), {
          message: payload.noticeMessage,
          url: payload.noticePageUrl,
        });
      });
    }

    if (elmApp.ports.trackPageAction !== undefined) {
      elmApp.ports.trackPageAction.subscribe((payload) => {
        if (!console) {
          window.NREUM.addPageAction(payload.pageActionName, payload.pageActionAttributes); // eslint-disable-line no-undef
        } else {
          window.console.log('trackCurrentRouteName');
        }
      });
    }

    if (elmApp.ports.trackRelease !== undefined) {
      elmApp.ports.trackRelease.subscribe((payload) => {
        if (!console) {
          window.NREUM.addRelease(payload.releaseName, payload.releaseId); // eslint-disable-line no-undef
        } else {
          window.console.log('trackCurrentRouteName');
        }
      });
    }
  }
};
