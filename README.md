# Task Manager Web App

This project outlines the Minimum Viable Product (MVP) for a web application that turns meeting transcripts into actionable tasks and allows teams to manage them collaboratively in real time.

## Core Value Proposition

Paste a meeting transcript, let the AI extract tasks, then manage those tasks together on a shared board.

## MVP Features

- **Authentication & Teams**: Google/GitHub OAuth, simple team creation, basic profiles.
- **AI Task Extraction**: Text area for transcripts, OpenAI integration, smart parsing with a review step.
- **Task Management**: Create and update tasks with title, description, assignee, due date, priority and status.
- **Views & Organization**: Kanban board (Todo → In Progress → Done), filters for "My Tasks" and meeting-based grouping.
- **Real-time Collaboration**: Live updates via Supabase, basic notifications and activity feed.

### User Journey

1. Log in to the dashboard.
2. Start a new transcript, let AI propose tasks, and approve them for import.
3. Manage tasks on the board, drag between columns and assign teammates.

### Technical Stack

- **Frontend**: Next.js 14 with TypeScript.
- **Backend**: Supabase storing teams, members and tasks.
- **Key API Routes**: `/api/ai/extract-tasks`, `/api/tasks`, `/api/tasks/[id]`, `/api/teams/[id]/tasks`.

### Out-of-Scope for MVP

No advanced permissions, comments, time tracking, third-party integrations or mobile app.

### Success Metrics

Activation is measured by how many users import tasks from transcripts, task completion rate and team adoption levels.
