import { Button } from "@/components/shadcn-ui/button"

type LoadingButtonProps = {
    isPending: boolean
    children?: React.ReactNode
}

export default function LoadingButton({ isPending, children }: LoadingButtonProps) {
    return (
        <Button
            variant="outline"
            className="w-full cursor-pointer"
            disabled={isPending}
        >
            {children}
        </Button>
    )
}


