export default function Unauthorized() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
            <h1 className="text-4xl font-bold mb-4 text-foreground">401 - Accès non autorisé</h1>
            <p className="mb-8 text-muted-foreground">
                Désolé, vous n&apos;êtes pas autorisé à accéder à cette page.
            </p>
        </div>
    );
}