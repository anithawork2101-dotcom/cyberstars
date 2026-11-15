-- How many clicked each announcement in the bell, so the admins see how many
-- opened it; the announcements already sent get false, as nobody counted the clicks
ALTER TABLE "announcements" ADD COLUMN "recipients" INTEGER NOT NULL DEFAULT 0;
ALTER TABLE "announcements" ADD COLUMN "openers" INTEGER NOT NULL DEFAULT 0;
ALTER TABLE "announcements" ADD COLUMN "counts_opens" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "announcements" ALTER COLUMN "counts_opens" SET DEFAULT true;

-- CreateTable
CREATE TABLE "announcement_openers" (
    "announcement_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "announcement_openers_pkey" PRIMARY KEY ("announcement_id","user_id")
);

-- AddForeignKey
ALTER TABLE "announcement_openers" ADD CONSTRAINT "announcement_openers_announcement_id_fkey" FOREIGN KEY ("announcement_id") REFERENCES "announcements"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "announcement_openers" ADD CONSTRAINT "announcement_openers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
