import { trpc } from "@/utils/trpc";
import queryClient from "@/utils/query-client";
import { CreateUserInput } from "@/server/schema/user-schema";

export const useUserMutation = () => {
    const { mutateAsync, error } = trpc.createUser.useMutation({
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [["getUsers"], { input: { limit: 10, page: 1 }, type: "query" }],
            });
        },
        onError: (err) => {
            throw err
        },
    });

    const createUser = async (data: CreateUserInput) => {
        return await mutateAsync(data);
    };

    return { createUser, error };
};
