<script setup lang="ts">
import { html } from '@/highlight/CodeHighlightData.ts'
</script>

<template>
    <main>
        <div
            class="relative overflow-hidden shadow-xl flex bg-slate-800 w-[32rem] h-[31.625rem] max-h-[60vh] sm:max-h-[none] sm:rounded-xl lg:h-[34.6875rem] xl:h-[31.625rem] dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10"
        >
            <div class="relative w-full flex flex-col">
                <div class="flex-none border-b border-slate-500/30">
                    <div class="flex items-center h-8 space-x-1.5 px-3">
                        <div class="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                        <div class="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                        <div class="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                    </div>
                </div>
                <div class="relative min-h-0 flex-auto flex flex-col">
                    <div class="w-full flex-auto flex min-h-0" style="opacity: 1">
                        <div class="w-full flex-auto flex min-h-0 overflow-auto">
                            <div class="w-full relative flex-auto">
                                <pre class="flex min-h-full text-sm leading-6">
                                    <highlightjs :code="html" language="html"></highlightjs>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
