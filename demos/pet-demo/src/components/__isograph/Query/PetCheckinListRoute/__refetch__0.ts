import type { IsographEntrypoint, ReaderAst, FragmentReference, NormalizationAst, RefetchQueryNormalizationArtifact } from '@isograph/react';
import queryText from './__refetch__query_text__0';

const normalizationAst: NormalizationAst = {
  kind: "NormalizationAst",
  selections: [
    {
      kind: "Linked",
      fieldName: "make_checkin_super",
      arguments: [
        [
          "checkin_id",
          { kind: "Variable", name: "checkin_id" },
        ],
      ],
      concreteType: "MakeCheckinSuperResponse",
      selections: [
        {
          kind: "Linked",
          fieldName: "icheckin",
          arguments: null,
          concreteType: null,
          selections: [
            {
              kind: "InlineFragment",
              type: "Checkin",
              selections: [
                {
                  kind: "Scalar",
                  fieldName: "__typename",
                  arguments: null,
                },
                {
                  kind: "Scalar",
                  fieldName: "id",
                  arguments: null,
                },
                {
                  kind: "Scalar",
                  fieldName: "location",
                  arguments: null,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
const artifact: RefetchQueryNormalizationArtifact = {
  kind: "RefetchQuery",
  networkRequestInfo: {
    kind: "NetworkRequestInfo",
    queryText,
    normalizationAst,
  },
  concreteType: "Mutation",
};

export default artifact;
