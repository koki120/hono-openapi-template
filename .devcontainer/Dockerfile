FROM mcr.microsoft.com/devcontainers/base:debian

RUN curl -fsSL https://deno.land/x/install/install.sh | sh \
    && export DENO_INSTALL="/home/vscode/.deno" \
    && export PATH="$DENO_INSTALL/bin:$PATH"
