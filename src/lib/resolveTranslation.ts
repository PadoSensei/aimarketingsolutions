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

  if (typeof value === "string") {
    let result = value;

    // Automatic interpolation for brandName
    if (result.includes("{{brandName}}") && (!variables || !variables.brandName)) {
      const brandName = obj.common?.brandName || obj.brand?.name || "AI Solutions";
      result = result.replaceAll("{{brandName}}", brandName);
    }

    if (variables) {
      result = Object.entries(variables).reduce(
        (acc, [vKey, vValue]) => acc.replaceAll(`{{${vKey}}}`, vValue),
        result
      );
    }
    return result;
  }

  if (Array.isArray(value)) {
    return value;
  }

  return undefined;
}
