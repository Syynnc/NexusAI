<!-- BEGIN:ai-efficiency-rules -->
# 🛑 AI USAGE LIMIT PROTECTION RULES 🛑

**CRITICAL: Follow these rules perfectly to avoid wasting the user's AI API requests, tokens, and time.**

To prevent inefficient multi-turn corrections, you MUST do the following before submitting any response containing code suggestions or changes:

1. **Verify Before Changing:** Do not assume a file, function, module, or variable exists. You MUST use the `view_file` or `grep_search` tools to confirm the current state of the codebase before you propose any changes.
2. **Pre-flight Error Checks:** Before finalizing code changes, carefully review your proposed code for syntax errors, typing mismatches, and undefined variable usage. Think step-by-step through execution manually.
3. **Test the Changes (When Possible):** If you are unsure if the changes will cause a build error or linter failure, use the `run_command` tool to run `npm run lint` or `npm run build` locally, verify success, and only then suggest the change. Do NOT wait for the user to paste errors back to you.
4. **Complete Code Deliverables:** Absolutely NO placeholders like `// ...existing code...` or `// Implement logic here`. Provide full, drop-in replacement snippets or use the `multi_replace_file_content` tool properly to ensure the user doesn't have to spend a turn asking you to "finish the file".
5. **Concise Output:** Start your response with answers. Do not output massive paragraphs of filler text. Deliver the fix immediately, explain the *why* briefly if asked, and end your turn. 
<!-- END:ai-efficiency-rules -->
