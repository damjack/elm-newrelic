import type {
  AddPageActionPort,
  AddReleasePort,
  InteractionPort,
  NoticeErrorPort,
  RouteNamePort,
} from './types.d'

/**
 * Try to track routing path name to RUM
 *
 * @param payload - Custom Payload for current tracking
 * @param console - Enable console log, default false
 */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export const routeName: RouteNamePort = (payload, console = false) => {
  if (!console) {
    if ('NREUM' in window) {
      /* eslint-disable @typescript-eslint/no-unsafe-call */
      window.NREUM.setCurrentRouteName(payload.routeName) // eslint-disable-line no-undef
    }
  } else {
    window.console.log('routeName: ', payload)
  }
}

/**
 * Try to track Global Context to RUM
 *
 * @param payload - Custom Payload for current tracking
 * @param console - Enable console log, default false
 */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export const addPageAction: AddPageActionPort = (payload, console = false) => {
  if (!console) {
    if ('NREUM' in window) {
      /* eslint-disable @typescript-eslint/no-unsafe-call */
      window.NREUM.addPageAction(payload.actionName, payload.additionalData) // eslint-disable-line no-undef
    }
  } else {
    window.console.log('pageAction: ', payload)
  }
}

/**
 * Try to track Custom Action to RUM
 *
 * @param payload - Custom Payload for current tracking
 * @param console - Enable console log, default false
 */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export const interaction: InteractionPort = (payload, console = false) => {
  if (!console) {
    if ('NREUM' in window) {
      /* eslint-disable @typescript-eslint/no-unsafe-call */
      const interaction = window.NREUM.interaction() // eslint-disable-line @typescript-eslint/no-unsafe-assignment
      if (payload.interactionMessage !== undefined) {
        interaction.actionText(payload.interactionMessage)
      }
      interaction.setName(payload.interactionName)
      payload.additionalData.forEach((attr) => {
        interaction.setAttribute(attr.key, attr.value)
      })
      interaction.save().end()
    }
  } else {
    window.console.log('interaction: ', payload)
  }
}

/**
 * Try to track error to RUM
 *
 * @param payload - Custom Payload for current tracking
 * @param console - Enable console log, default false
 */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export const noticeError: NoticeErrorPort = (payload, console = false) => {
  if (!console) {
    if ('NREUM' in window) {
      /* eslint-disable no-undef */
      /* eslint-disable @typescript-eslint/no-unsafe-call */
      window.NREUM.noticeError(
        new Error(`${payload.errorPrefix}: ${payload.errorStackTrace}`),
        payload.additionalData,
      )
    }

    if ('NRAGENT' in window) {
      /* eslint-disable no-undef */
      /* eslint-disable @typescript-eslint/no-unsafe-call */
      window.NRAGENT.noticeError(
        new Error(`${payload.errorPrefix}: ${payload.errorStackTrace}`),
        payload.additionalData,
      )
    }
  } else {
    window.console.log('noticeError: ', payload)
  }
}

/**
 * Try to identify User to RUM
 *
 * @param payload - Custom Payload for current tracking
 * @param console - Enable console log, default false
 */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export const addRelease: AddReleasePort = (payload, console = false) => {
  if (!console) {
    if ('NREUM' in window) {
      /* eslint-disable @typescript-eslint/no-unsafe-call */
      window.NREUM.addRelease(payload.releaseName, payload.releaseVersion) // eslint-disable-line no-undef
    }
  } else {
    window.console.log('addRelease: ', payload)
  }
}
