import { forwardRef, Fragment, useMemo } from "react";
import LazyImageProps from "./props";
import * as S from "./styles";
import replaceExtension from "@/utils/replace-extension";
import Head from "next/head";
import { viewportsBase } from "@/utils/media-query/viewport-base";

export const LazyImage = forwardRef<HTMLImageElement, LazyImageProps>(
  ({ src, alt, notLazy, className, responsive, ...props }, ref) => {
    const getSourceWebp = (value: string) => {
      const [source, ext] = replaceExtension(value, "webp");

      return ext !== ".svg" ? source : null;
    };

    const responsiveSource = useMemo(() => {
      if (!responsive) {
        return null;
      }

      const entries = Object.entries(responsive)
        .map(([key, value]) => ({
          maxWidth: Number(
            key.match("[0-9]+") ? key : viewportsBase[key as keyof typeof viewportsBase].width,
          ),
          value,
        }))
        .sort((p1, p2) => (p1.maxWidth > p2.maxWidth ? 1 : -1));

      return entries.map(({ maxWidth, value }) => {
        if (!value) {
          return;
        }

        const valueWebp = getSourceWebp(value);

        return (
          <Fragment key={maxWidth}>
            {valueWebp && (
              <source srcSet={valueWebp} media={`(max-width: ${maxWidth}px)`} type="image/webp" />
            )}
            <source srcSet={value} media={`(max-width: ${maxWidth}px)`} />
          </Fragment>
        );
      });
    }, [responsive]);

    const sourceWebp = getSourceWebp(src);

    return (
      <>
        {notLazy && (
          <Head>
            {sourceWebp && (
              <link rel="preload" as="image" href={`${process.env.NEXT_PUBLIC_URL}${sourceWebp}`} />
            )}
            <link rel="preload" as="image" href={`${process.env.NEXT_PUBLIC_URL}${src}`} />
          </Head>
        )}
        <S.Picture>
          {responsiveSource}
          {sourceWebp && (
            <source srcSet={`${process.env.NEXT_PUBLIC_URL}${sourceWebp}`} type="image/webp" />
          )}
          <img
            ref={ref}
            {...props}
            className={className}
            src={`${process.env.NEXT_PUBLIC_URL}${src}`}
            alt={alt}
            title={alt}
            loading={notLazy ? "eager" : "lazy"}
          />
        </S.Picture>
      </>
    );
  },
);

LazyImage.displayName = "LazyImage";
