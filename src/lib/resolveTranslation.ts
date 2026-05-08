import type { Translations } from "@/types/translations";

export function resolveTranslation(
  obj: any,
  key: string,
  variables?: Record<string, string>
): any {
  const keys = key.split(".");

  const value = keys.reduce(
    (acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined),
    obj
  );

  if (typeof value === "string" || Array.isArray(value)) {
    if (variables && typeof value === "string") {
      return Object.entries(variables).reduce(
        (acc, [vKey, vValue]) => acc.replaceAll(`{{${vKey}}}`, vValue),
        value
      );
    }
    return value;
  }

  return undefined;
}
