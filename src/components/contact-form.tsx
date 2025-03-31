import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField, FormItem, FormControl, FormMessage } from "~/components/ui/form";
import { Input } from "~/components/ui/input";

const formSchema = z.object({
  username: z.string().min(1, "Username is required"),
});

export function ProfileForm({ form, onSubmit, placeholder }: any) {
  // Use provided form or create a default one
  const defaultForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "" },
  });

  const formInstance = form || defaultForm;
  const handleSubmit = onSubmit || ((values: z.infer<typeof formSchema>) => console.log(values));

  return (
    <Form {...formInstance}>
      <form onSubmit={formInstance.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={formInstance.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl className="border-black">
                <Input placeholder={placeholder || ""} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}