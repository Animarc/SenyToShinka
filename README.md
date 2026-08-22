# Seny to Shinka

Web corporativa bilingüe (español/japonés) para servicios de modernización legacy, observabilidad y SRE.

## Desarrollo local

```bash
pnpm install
pnpm dev
```

## Calidad y compilación

```bash
pnpm lint
pnpm build
```

## Publicación en GitHub Pages

1. Crea un repositorio llamado `SenyToShinka` en GitHub.
2. Sube este proyecto a la rama `main`.
3. En **Settings → Pages → Build and deployment**, selecciona **GitHub Actions**.
4. El workflow incluido compilará y publicará la web automáticamente.

Si el repositorio usa otro nombre, actualiza `base` en `vite.config.ts`.

## Personalización pendiente

- Sustituye `hello@senytoshinka.com` en `src/App.tsx` por el correo definitivo.
- Añade el dominio final y la imagen social cuando estén disponibles.
