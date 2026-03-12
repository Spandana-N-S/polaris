/* eslint -disable react-hooks/purity */


import { useAuth } from '@clerk/nextjs';
import { useQuery, useMutation } from "convex/react";

import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";

export const useProjects = () => {
    return useQuery(api.projects.get);
};

export const useProjectsPartial = (limit: number) => {
    return useQuery(api.projects.getPartial, {
        limit,
    });
};

export const useCreateProject = () => {
    const { userId } = useAuth();

    return useMutation(api.projects.create).withOptimisticUpdate(
        (localStore, args) => {
            const existingProjects = localStore.getQuery(api.projects.get);

            if (existingProjects !== undefined){
               const now = Date.now();
               const newProjects = {
                _id: crypto.randomUUID() as Id<"projects">,
                _creationTime: now,
                name:args.name,
                ownerId: "anonymous",
                updatedAt: now,
               };

               localStore.setQuery(api.projects.get, {}, [
                newProjects,
                ...existingProjects,
               ]);
            }
        }
    )
};