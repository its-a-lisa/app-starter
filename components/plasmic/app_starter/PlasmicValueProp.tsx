// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9WWMjYs2gyQXMvMAkxbjFX
// Component: bMNgttUj5XYc

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_app_starter.module.css"; // plasmic-import: 9WWMjYs2gyQXMvMAkxbjFX/projectcss
import sty from "./PlasmicValueProp.module.css"; // plasmic-import: bMNgttUj5XYc/css

createPlasmicElementProxy;

export type PlasmicValueProp__VariantMembers = {
  flatIcon: "flatIcon";
  vertical: "vertical";
  card: "card";
  noTitle: "noTitle";
  darkBackground: "darkBackground";
};
export type PlasmicValueProp__VariantsArgs = {
  flatIcon?: SingleBooleanChoiceArg<"flatIcon">;
  vertical?: SingleBooleanChoiceArg<"vertical">;
  card?: SingleBooleanChoiceArg<"card">;
  noTitle?: SingleBooleanChoiceArg<"noTitle">;
  darkBackground?: SingleBooleanChoiceArg<"darkBackground">;
};
type VariantPropType = keyof PlasmicValueProp__VariantsArgs;
export const PlasmicValueProp__VariantProps = new Array<VariantPropType>(
  "flatIcon",
  "vertical",
  "card",
  "noTitle",
  "darkBackground"
);

export type PlasmicValueProp__ArgsType = {
  description?: React.ReactNode;
  icon?: React.ReactNode;
  title?: React.ReactNode;
};
type ArgPropType = keyof PlasmicValueProp__ArgsType;
export const PlasmicValueProp__ArgProps = new Array<ArgPropType>(
  "description",
  "icon",
  "title"
);

export type PlasmicValueProp__OverridesType = {
  root?: p.Flex<"div">;
  iconContainer?: p.Flex<"div">;
  contentContainer?: p.Flex<"div">;
};

export interface DefaultValuePropProps {
  description?: React.ReactNode;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  flatIcon?: SingleBooleanChoiceArg<"flatIcon">;
  vertical?: SingleBooleanChoiceArg<"vertical">;
  card?: SingleBooleanChoiceArg<"card">;
  noTitle?: SingleBooleanChoiceArg<"noTitle">;
  darkBackground?: SingleBooleanChoiceArg<"darkBackground">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicValueProp__RenderFunc(props: {
  variants: PlasmicValueProp__VariantsArgs;
  args: PlasmicValueProp__ArgsType;
  overrides: PlasmicValueProp__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "flatIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.flatIcon
      },
      {
        path: "vertical",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.vertical
      },
      {
        path: "card",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.card
      },
      {
        path: "noTitle",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noTitle
      },
      {
        path: "darkBackground",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.darkBackground
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootcard]: hasVariant($state, "card", "card"),
          [sty.rootflatIcon]: hasVariant($state, "flatIcon", "flatIcon"),
          [sty.rootnoTitle]: hasVariant($state, "noTitle", "noTitle"),
          [sty.rootvertical]: hasVariant($state, "vertical", "vertical"),
          [sty.rootvertical_card]:
            hasVariant($state, "card", "card") &&
            hasVariant($state, "vertical", "vertical")
        }
      )}
    >
      <div
        data-plasmic-name={"iconContainer"}
        data-plasmic-override={overrides.iconContainer}
        className={classNames(projectcss.all, sty.iconContainer, {
          [sty.iconContainercard]: hasVariant($state, "card", "card"),
          [sty.iconContainerflatIcon]: hasVariant(
            $state,
            "flatIcon",
            "flatIcon"
          ),
          [sty.iconContainervertical]: hasVariant(
            $state,
            "vertical",
            "vertical"
          ),
          [sty.iconContainervertical_card]:
            hasVariant($state, "card", "card") &&
            hasVariant($state, "vertical", "vertical")
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__g2LMy)}
              displayHeight={"56px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"none"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"56px"}
              src={
                "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/twitter/281/red-apple_1f34e.png"
              }
            />
          ),

          value: args.icon
        })}
      </div>
      <p.Stack
        as={"div"}
        data-plasmic-name={"contentContainer"}
        data-plasmic-override={overrides.contentContainer}
        hasGap={true}
        className={classNames(projectcss.all, sty.contentContainer, {
          [sty.contentContainerflatIcon]: hasVariant(
            $state,
            "flatIcon",
            "flatIcon"
          ),
          [sty.contentContainernoTitle]: hasVariant(
            $state,
            "noTitle",
            "noTitle"
          )
        })}
      >
        {(hasVariant($state, "noTitle", "noTitle") ? false : true)
          ? p.renderPlasmicSlot({
              defaultContents: "Label",
              value: args.title,
              className: classNames(sty.slotTargetTitle, {
                [sty.slotTargetTitledarkBackground]: hasVariant(
                  $state,
                  "darkBackground",
                  "darkBackground"
                ),
                [sty.slotTargetTitlenoTitle]: hasVariant(
                  $state,
                  "noTitle",
                  "noTitle"
                )
              })
            })
          : null}
        {p.renderPlasmicSlot({
          defaultContents:
            "Porttitor feugiat a scelerisque nullam parturient vestibulum tempor a litora suscipit arcu potenti varius venenatis venenatis dapibus fames adipiscing in in taciti.",
          value: args.description,
          className: classNames(sty.slotTargetDescription, {
            [sty.slotTargetDescriptioncard]: hasVariant($state, "card", "card"),
            [sty.slotTargetDescriptiondarkBackground]: hasVariant(
              $state,
              "darkBackground",
              "darkBackground"
            ),
            [sty.slotTargetDescriptionnoTitle]: hasVariant(
              $state,
              "noTitle",
              "noTitle"
            )
          })
        })}
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "iconContainer", "contentContainer"],
  iconContainer: ["iconContainer"],
  contentContainer: ["contentContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  iconContainer: "div";
  contentContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicValueProp__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicValueProp__VariantsArgs;
    args?: PlasmicValueProp__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicValueProp__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicValueProp__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicValueProp__ArgProps,
          internalVariantPropNames: PlasmicValueProp__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicValueProp__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicValueProp";
  } else {
    func.displayName = `PlasmicValueProp.${nodeName}`;
  }
  return func;
}

export const PlasmicValueProp = Object.assign(
  // Top-level PlasmicValueProp renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    iconContainer: makeNodeComponent("iconContainer"),
    contentContainer: makeNodeComponent("contentContainer"),

    // Metadata about props expected for PlasmicValueProp
    internalVariantProps: PlasmicValueProp__VariantProps,
    internalArgProps: PlasmicValueProp__ArgProps
  }
);

export default PlasmicValueProp;
/* prettier-ignore-end */
