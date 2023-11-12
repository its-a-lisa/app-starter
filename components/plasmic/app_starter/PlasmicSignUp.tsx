// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9WWMjYs2gyQXMvMAkxbjFX
// Component: zVLZtI87iI1h

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";

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
import Navbar from "../../Navbar"; // plasmic-import: Sf-roQghQ14-/component
import SignUpPrompt from "../../SignUpPrompt"; // plasmic-import: 7Zl2VIax1zjD/component
import FooterSection from "../../FooterSection"; // plasmic-import: WaNzcmtox2aw/component

import { useScreenVariants as useScreenVariantseEon1ZnLO7Y } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: eEON1ZN-lO7Y/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_app_starter.module.css"; // plasmic-import: 9WWMjYs2gyQXMvMAkxbjFX/projectcss
import sty from "./PlasmicSignUp.module.css"; // plasmic-import: zVLZtI87iI1h/css

createPlasmicElementProxy;

export type PlasmicSignUp__VariantMembers = {};
export type PlasmicSignUp__VariantsArgs = {};
type VariantPropType = keyof PlasmicSignUp__VariantsArgs;
export const PlasmicSignUp__VariantProps = new Array<VariantPropType>();

export type PlasmicSignUp__ArgsType = {};
type ArgPropType = keyof PlasmicSignUp__ArgsType;
export const PlasmicSignUp__ArgProps = new Array<ArgPropType>();

export type PlasmicSignUp__OverridesType = {
  root?: p.Flex<"div">;
  headerHeroSection?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  columns?: p.Flex<"div">;
  column?: p.Flex<"div">;
  signUpPrompt?: p.Flex<typeof SignUpPrompt>;
  footerSection?: p.Flex<typeof FooterSection>;
};

export interface DefaultSignUpProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSignUp__RenderFunc(props: {
  variants: PlasmicSignUp__VariantsArgs;
  args: PlasmicSignUp__ArgsType;
  overrides: PlasmicSignUp__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantseEon1ZnLO7Y()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicSignUp.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicSignUp.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicSignUp.pageMetadata.title}
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
          <p.Stack
            as={"div"}
            data-plasmic-name={"headerHeroSection"}
            data-plasmic-override={overrides.headerHeroSection}
            hasGap={true}
            className={classNames(projectcss.all, sty.headerHeroSection)}
          >
            <Navbar
              data-plasmic-name={"navbar"}
              data-plasmic-override={overrides.navbar}
              className={classNames("__wab_instance", sty.navbar)}
              isAuthFlow={true}
            />

            <p.Stack
              as={"div"}
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div
                data-plasmic-name={"column"}
                data-plasmic-override={overrides.column}
                className={classNames(projectcss.all, sty.column)}
              >
                <SignUpPrompt
                  data-plasmic-name={"signUpPrompt"}
                  data-plasmic-override={overrides.signUpPrompt}
                  className={classNames("__wab_instance", sty.signUpPrompt)}
                  isSignUpFlow={true}
                />
              </div>
            </p.Stack>
          </p.Stack>
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
  root: [
    "root",
    "headerHeroSection",
    "navbar",
    "columns",
    "column",
    "signUpPrompt",
    "footerSection"
  ],
  headerHeroSection: [
    "headerHeroSection",
    "navbar",
    "columns",
    "column",
    "signUpPrompt"
  ],
  navbar: ["navbar"],
  columns: ["columns", "column", "signUpPrompt"],
  column: ["column", "signUpPrompt"],
  signUpPrompt: ["signUpPrompt"],
  footerSection: ["footerSection"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerHeroSection: "div";
  navbar: typeof Navbar;
  columns: "div";
  column: "div";
  signUpPrompt: typeof SignUpPrompt;
  footerSection: typeof FooterSection;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSignUp__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSignUp__VariantsArgs;
    args?: PlasmicSignUp__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSignUp__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSignUp__ArgsType,
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
          internalArgPropNames: PlasmicSignUp__ArgProps,
          internalVariantPropNames: PlasmicSignUp__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSignUp__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignUp";
  } else {
    func.displayName = `PlasmicSignUp.${nodeName}`;
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
      canTriggerLogin={true}
    >
      <WrappedComponent {...props} />
    </p.PlasmicPageGuard>
  );

  return PageGuard;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "9WWMjYs2gyQXMvMAkxbjFX"
    });

    return (
      <p.PlasmicDataSourceContextProvider
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </p.PlasmicDataSourceContextProvider>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicSignUp = Object.assign(
  // Top-level PlasmicSignUp renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    headerHeroSection: makeNodeComponent("headerHeroSection"),
    navbar: makeNodeComponent("navbar"),
    columns: makeNodeComponent("columns"),
    column: makeNodeComponent("column"),
    signUpPrompt: makeNodeComponent("signUpPrompt"),
    footerSection: makeNodeComponent("footerSection"),

    // Metadata about props expected for PlasmicSignUp
    internalVariantProps: PlasmicSignUp__VariantProps,
    internalArgProps: PlasmicSignUp__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Sign Up",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSignUp;
/* prettier-ignore-end */