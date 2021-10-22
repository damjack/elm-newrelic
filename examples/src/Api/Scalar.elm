-- Do not manually edit this file, it was auto-generated by dillonkearns/elm-graphql
-- https://github.com/dillonkearns/elm-graphql
module Api.Scalar exposing (Codecs, Id(..), defaultCodecs, defineCodecs, unwrapCodecs, unwrapEncoder)


import Graphql.Internal.Builder.Object as Object
import Json.Decode as Decode exposing (Decoder)
import Graphql.Internal.Encode
import Json.Encode as Encode
import Graphql.Codec exposing (Codec)


type Id
    = Id String

defineCodecs :
    {codecId : Codec valueId}
    -> Codecs valueId
defineCodecs definitions =
    Codecs definitions


unwrapCodecs :
    Codecs valueId
    -> {codecId : Codec valueId}
unwrapCodecs (Codecs unwrappedCodecs) =
    unwrappedCodecs


unwrapEncoder :
    (RawCodecs valueId -> Codec getterValue)
    -> Codecs valueId
    -> getterValue
    -> Graphql.Internal.Encode.Value
unwrapEncoder getter (Codecs unwrappedCodecs) =
    (unwrappedCodecs |> getter |> .encoder) >> Graphql.Internal.Encode.fromJson


type Codecs valueId
    = Codecs (RawCodecs valueId)


type alias RawCodecs valueId =
    {codecId : Codec valueId}


defaultCodecs : RawCodecs Id
defaultCodecs =
    {codecId =
  { encoder = \(Id raw) -> Encode.string raw
 , decoder = Object.scalarDecoder |> Decode.map Id }}
