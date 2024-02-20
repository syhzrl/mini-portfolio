import type { Prisma } from '@prisma/client';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { nanoid } from 'nanoid';

import prisma from 'server/prisma';

import { router, publicProcedure } from '../trpc';

const profileRouter = router({
    createProfile: publicProcedure
        .input(
            z.object({
                name: z.string()
            })
        )
        .mutation(async ({ input }) => {
            await prisma.profile.create({
                data: {
                    ...input
                }
            });
        }),

    getProfile: publicProcedure
        .input(
            z.object({
                name: z.string()
            })
        )
        .query(async ({ input }) => {
            const profile = await prisma.profile.findUnique({
                where: {
                    name: input.name
                }
            });

            return profile;
        })
});

export default profileRouter;
