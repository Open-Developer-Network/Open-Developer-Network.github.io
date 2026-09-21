"use client";
import { Card } from "@chakra-ui/react";

export default function MakeCard({ children }: { children: React.ReactNode }) {
    return (
        <Card.Root variant={"outline"} >
            {children}
        </Card.Root>
    );
}