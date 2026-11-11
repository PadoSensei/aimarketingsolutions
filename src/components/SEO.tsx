import React from "react";

export interface JsonLdProps {
  data: Record<string, any> | Array<Record<string, any>>;
}

/**
 * Reusable component for injecting JSON-LD structured data into the HTML head.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

export default JsonLd;
