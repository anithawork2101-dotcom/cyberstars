-- One row per message a student sent the tutor, with no account and no text,
-- so the admin page counts how much the tutor is used without saying who
CREATE TABLE "tutor_prompts" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tutor_prompts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "tutor_prompts_created_at_idx" ON "tutor_prompts"("created_at");

-- The messages still saved count from the start, the admins' and the
-- founder's left out
INSERT INTO "tutor_prompts" ("created_at")
SELECT m."created_at"
FROM "tutor_messages" m
JOIN "tutor_conversations" c ON c."id" = m."conversation_id"
JOIN "users" u ON u."id" = c."user_id"
WHERE m."role" = 'student' AND u."role" NOT IN ('ADMIN', 'FOUNDER')
ORDER BY m."created_at";
