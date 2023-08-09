import { CustomParameterGroup, Tooltip } from "@bera/shared-ui";
import { FormField, FormItem, FormMessage } from "@bera/ui/form";
import { type UseFormReturn } from "react-hook-form";

export default function ParameterForm({ form }: { form: UseFormReturn }) {
  return (
    <>
      <FormField
        control={form.control}
        name="parameters2Change"
        render={({ field }) => (
          <FormItem className="inline-flex flex-col justify-start gap-2">
            <div className="text-sm font-semibold leading-tight">
              Parameters to change <Tooltip text="test" />
            </div>
            <div>
              <CustomParameterGroup
                onSubmit={(parameterFrom) =>
                  form.setValue("parameters2Change", parameterFrom)
                }
              />
              <FormMessage className="mt-[-24px]" />
            </div>
          </FormItem>
        )}
      />
    </>
  );
}
