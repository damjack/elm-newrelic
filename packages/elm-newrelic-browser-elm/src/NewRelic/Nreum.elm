module NewRelic.Nreum exposing
    ( currentRouteName, interaction, noticeError, pageAction, release
    , publish, publishList
    )

{-| You can use browser agent and SPA API to monitor virtually anything that executes inside the browser.

SPA monitoring can help you:

  - Create faster, more responsive, highly interactive apps.
  - Monitor the throughput and performance that real users are experiencing.
  - Troubleshoot and resolve problems within the context of the page load.
  - Query and visualize the data to assist with business decisions.
  - Bring better apps to the marketplace more quickly


## Defining tracking

@docs currentRouteName, interaction, noticeError, pageAction, release


## Publishing

@docs publish, publishList

-}

import NewRelic.CurrentRouteName as CurrentRouteName
import NewRelic.Interaction as Interaction
import NewRelic.NoticeError as NoticeError
import NewRelic.PageAction as PageAction
import NewRelic.Release as Release
import NewRelic.Tracking as Tracking


type NreumTracking
    = CurrentRouteNameTracking CurrentRouteName.CurrentRouteName
    | InteractionTracking Interaction.Interaction
    | NoticeErrorTracking NoticeError.NoticeError
    | PageActionTracking PageAction.PageAction
    | ReleaseTracking Release.Release


currentRouteName : CurrentRouteName.CurrentRouteName -> NreumTracking
currentRouteName config =
    CurrentRouteNameTracking config


interaction : Interaction.Interaction -> NreumTracking
interaction config =
    InteractionTracking config


noticeError : NoticeError.NoticeError -> NreumTracking
noticeError config =
    NoticeErrorTracking config


pageAction : PageAction.PageAction -> NreumTracking
pageAction config =
    PageActionTracking config


release : Release.Release -> NreumTracking
release config =
    ReleaseTracking config


publishList : List RumTracking -> List (Cmd msg)
publishList =
    List.map publish


publish : NreumTracking -> Cmd msg
publish tracking =
    case tracking of
        CurrentRouteNameTracking config ->
            config
                |> CurrentRouteName.encode
                |> Tracking.trackCurrentRouteName

        InteractionTracking config ->
            config
                |> Interaction.encode
                |> Tracking.trackInteraction

        NoticeErrorTracking config ->
            config
                |> NoticeError.encode
                |> Tracking.trackNoticeError

        PageActionTracking config ->
            config
                |> PageAction.encode
                |> Tracking.trackPageAction

        ReleaseTracking config ->
            config
                |> Release.encode
                |> Tracking.trackRelease
