// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9WWMjYs2gyQXMvMAkxbjFX
// Component: Gf6rN_vaYsQF

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
import AppLayout from "../../AppLayout"; // plasmic-import: jLwULkfXhWwf/component
import FooterSection from "../../FooterSection"; // plasmic-import: WaNzcmtox2aw/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_app_starter.module.css"; // plasmic-import: 9WWMjYs2gyQXMvMAkxbjFX/projectcss
import sty from "./PlasmicDashboard.module.css"; // plasmic-import: Gf6rN_vaYsQF/css

createPlasmicElementProxy;

export type PlasmicDashboard__VariantMembers = {};
export type PlasmicDashboard__VariantsArgs = {};
type VariantPropType = keyof PlasmicDashboard__VariantsArgs;
export const PlasmicDashboard__VariantProps = new Array<VariantPropType>();

export type PlasmicDashboard__ArgsType = {};
type ArgPropType = keyof PlasmicDashboard__ArgsType;
export const PlasmicDashboard__ArgProps = new Array<ArgPropType>();

export type PlasmicDashboard__OverridesType = {
  root?: p.Flex<"div">;
  appLayout?: p.Flex<typeof AppLayout>;
  section?: p.Flex<"section">;
  h1?: p.Flex<"h1">;
  text?: p.Flex<"div">;
  footerSection?: p.Flex<typeof FooterSection>;
};

export interface DefaultDashboardProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDashboard__RenderFunc(props: {
  variants: PlasmicDashboard__VariantsArgs;
  args: PlasmicDashboard__ArgsType;
  overrides: PlasmicDashboard__OverridesType;
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

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicDashboard.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicDashboard.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicDashboard.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <AppLayout
            data-plasmic-name={"appLayout"}
            data-plasmic-override={overrides.appLayout}
            className={classNames("__wab_instance", sty.appLayout)}
          >
            <ph.DataCtxReader>
              {$ctx => (
                <section
                  data-plasmic-name={"section"}
                  data-plasmic-override={overrides.section}
                  className={classNames(projectcss.all, sty.section)}
                >
                  <h1
                    data-plasmic-name={"h1"}
                    data-plasmic-override={overrides.h1}
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1
                    )}
                  >
                    {"You won't believe what happens next."}
                  </h1>
                  <div
                    data-plasmic-name={"text"}
                    data-plasmic-override={overrides.text}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text
                    )}
                  >
                    {"Enter some text"}
                  </div>
                </section>
              )}
            </ph.DataCtxReader>
          </AppLayout>
          <FooterSection
            data-plasmic-name={"footerSection"}
            data-plasmic-override={overrides.footerSection}
            className={classNames("__wab_instance", sty.footerSection)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "appLayout", "section", "h1", "text", "footerSection"],
  appLayout: ["appLayout", "section", "h1", "text"],
  section: ["section", "h1", "text"],
  h1: ["h1"],
  text: ["text"],
  footerSection: ["footerSection"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  appLayout: typeof AppLayout;
  section: "section";
  h1: "h1";
  text: "div";
  footerSection: typeof FooterSection;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDashboard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDashboard__VariantsArgs;
    args?: PlasmicDashboard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDashboard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDashboard__ArgsType,
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
          internalArgPropNames: PlasmicDashboard__ArgProps,
          internalVariantPropNames: PlasmicDashboard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDashboard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDashboard";
  } else {
    func.displayName = `PlasmicDashboard.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const PageGuard: React.FC<P> = props => (
    <p.PlasmicPageGuard
      minRole={null}
      appId={"9WWMjYs2gyQXMvMAkxbjFX"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={false}
    >
      <WrappedComponent {...props} />
    </p.PlasmicPageGuard>
  );

  return PageGuard;
}

export const PlasmicDashboard = Object.assign(
  // Top-level PlasmicDashboard renders the root element
  withPlasmicPageGuard(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    appLayout: makeNodeComponent("appLayout"),
    section: makeNodeComponent("section"),
    h1: makeNodeComponent("h1"),
    text: makeNodeComponent("text"),
    footerSection: makeNodeComponent("footerSection"),

    // Metadata about props expected for PlasmicDashboard
    internalVariantProps: PlasmicDashboard__VariantProps,
    internalArgProps: PlasmicDashboard__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Dashboard",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicDashboard;
/* prettier-ignore-end */
