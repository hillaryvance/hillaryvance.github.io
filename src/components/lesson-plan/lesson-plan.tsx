import { languageDemands } from "./lessonContent";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Section, ChecklistSection } from "./LessonSection";
export function NarrativeWritingLesson() {
  return <Lesson title="Narrative Writing Revision" includeOverview />;
}

// Retained from the original portfolio; science-specific content is pending.
export function ScienceLesson() {
  return <Lesson title="Science Lesson" />;
}

function Lesson({
  title,
  includeOverview = false,
}: {
  title: string;
  includeOverview?: boolean;
}) {
  return (
    <Box sx={{ p: { xs: 0, sm: 2 } }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ mb: 4 }}>
        {title}
      </Typography>
      {includeOverview && <DirectInstructionLesson />}
      <LessonActivities />
    </Box>
  );
}
function LessonActivities() {
  return (
    <>
      <Section
        title="Language Demands"
        subtitle={
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Specific ways that <em>academic language</em> is used in reading,
            writing, listening, and/or speaking.
          </Typography>
        }
      >
        {languageDemands.map(({ heading, description }) => (
          <ChecklistSection
            key={heading}
            heading={heading}
            description={description}
          />
        ))}
      </Section>

      <Section title="Instructional Strategies and Learning Tasks">
        <Typography
          variant="h6"
          component="h5"
          sx={{ mt: 2, mb: 1, color: "text.primary" }}
        >
          Anticipatory Set
        </Typography>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "text.primary" }}
            >
              Activity Description/Teacher
            </Typography>
            <Typography variant="body2" sx={{ color: "text.primary" }}>
              The lesson will open by engaging students in a group discussion
              about their prior knowledge about the narrative checklist.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "text.primary" }}
            >
              Student Actions
            </Typography>
            <Typography variant="body2" sx={{ color: "text.primary" }}>
              Students will participate in the whole group instruction and
              answer questions about narratives and the editing process.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "text.primary" }}
            >
              Activity Description/Teacher
            </Typography>
            <Typography variant="body2" sx={{ color: "text.primary" }}>
              The teacher will display the checklist that students will be using
              to revise and edit their story. The teacher will then ask students
              to share a paragraph or two from their narrative and as a class
              help them revise those paragraphs while using the checklist.
              <br />
              <br />
              "We have a completed draft of our narrative, now we get to go back
              to our draft to make it even better. Writers do this by rereading
              their work and checking for places that they can improve their
              piece and make it even more interesting to their audience."
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "text.primary" }}
            >
              Student Actions
            </Typography>
            <Typography variant="body2" sx={{ color: "text.primary" }}>
              Students will participate in the whole group discussion on how the
              checklist will help them.
            </Typography>
          </Grid>
        </Grid>

        <Typography
          variant="h6"
          component="h5"
          sx={{ mt: 4, mb: 1, color: "text.primary" }}
        >
          Guided Practice
        </Typography>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "text.primary" }}
            >
              Activity Description/Teacher
            </Typography>
            <Typography variant="body2" sx={{ color: "text.primary" }}>
              While the students are in their groups of 2 or 3, the teacher will
              explain that they are going to pair up and read each other’s
              writing and then revise/edit their partner's story using the
              checklist.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "text.primary" }}
            >
              Student Actions
            </Typography>
            <Typography variant="body2" sx={{ color: "text.primary" }}>
              Students will reread their narrative and look for areas that need
              revision or editing. Writers will pair up and share their stories
              and edit/revise their narrative using the checklist.
            </Typography>
          </Grid>
        </Grid>

        <Typography
          variant="h6"
          component="h5"
          sx={{ mt: 4, mb: 1, color: "text.primary" }}
        >
          Independent Student Practice
        </Typography>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "text.primary" }}
            >
              Activity Description/Teacher
            </Typography>
            <Typography variant="body2" sx={{ color: "text.primary" }}>
              During this activity, the teacher will circulate the room to
              ensure that the students are on task and engaged in the activity.
              While circulating, the teacher will ask the students questions
              about their work and offer feedback as needed.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "text.primary" }}
            >
              Student Actions
            </Typography>
            <Typography variant="body2" sx={{ color: "text.primary" }}>
              Students will continue working on their narrative story.
            </Typography>
          </Grid>
        </Grid>
      </Section>
    </>
  );
}
export function DirectInstructionLesson() {
  return (
    <Box>
      <Section title="General Information">
        <Grid container spacing={2} gap={0}>
          <Grid size={12}>
            <Typography sx={{ color: "text.primary" }}>
              <strong>Lesson Title:</strong> Revise and Edit Narrative Writing
            </Typography>
            <Typography sx={{ color: "text.primary" }}>
              <strong>Subject(s):</strong> Writing
            </Typography>
          </Grid>
          <Grid size={12}>
            <Typography sx={{ color: "text.primary" }}>
              <strong>Grade/Level/Setting:</strong> This is a 5th Grade class
              consisting of 25 students, ages 10–11. There are 2 students with
              504 plans, 3 students who receive tier 2 level reading assistance,
              and 1 ELL student. Students are grouped into 4.
            </Typography>
          </Grid>
        </Grid>
      </Section>

      <Section title="Prerequisite Skills/Prior Knowledge">
        <Typography sx={{ color: "text.primary" }}>
          Students should have prior knowledge of On Demand Writing.
        </Typography>
        <Typography sx={{ color: "text.primary" }}>
          Students should have prior knowledge of what a Narrative writing is.
        </Typography>
      </Section>

      <Section title="Standards and Objectives">
        <Typography sx={{ color: "text.primary" }}>
          <strong>W.5.3:</strong> Write narratives to develop real or imagined
          experiences or events using effective technique, descriptive details,
          and clear event sequences.
        </Typography>
        <Typography sx={{ color: "text.primary" }}>
          <strong>W.5.5:</strong> With guidance and support from peers and
          adults, develop and strengthen writing as needed by planning,
          revising, editing, rewriting, or trying a new approach.
        </Typography>
      </Section>

      <Section title="Lesson Objective(s)">
        <Typography sx={{ color: "text.primary" }}>
          <strong>Objective 1:</strong> When revising and editing their
          narrative writing, students should accurately use their editing
          checklist with 90% accuracy.
        </Typography>
      </Section>

      <Grid container spacing={2} gap={0}>
        <Grid size={12}>
          <Section title="Materials">
            <Typography
              fontWeight="bold"
              gutterBottom
              sx={{ color: "text.primary" }}
            >
              Instructional Materials:
            </Typography>
            <List dense>
              {[
                "5th Grade Common Core Article: Source 1: Whales",
                "5th Grade Common Core Article: Source 2: Swimming with the Pod",
                "5th Grade Common Core Article: Source 3: How humpbacks Go Fishing",
                "Notes on Texts",
                "Writing Journal",
                "Narrative Prompt",
                "Narrative Draft",
              ].map((item) => (
                <ListItem key={item} disableGutters>
                  <ListItemText primary={item} sx={{ color: "text.primary" }} />
                </ListItem>
              ))}
            </List>
          </Section>
        </Grid>
        <Grid size={12}>
          <Section title="Technology">
            <Typography sx={{ color: "text.primary" }}>
              <strong>SAMR Level:</strong> Augmentation
            </Typography>
            <Typography sx={{ mt: 1, color: "text.primary" }}>
              The SMARTboard will be used to display the writing task and model
              how to revise a story. Displaying the writing lesson on the
              SMARTboard works as a teaching tool that provides functional
              improvements to the lesson by having more of a visual for students
              when learning new material. The PowerPoint displays the lesson
              objectives and instructions for the students to refer to while
              completing their work.
            </Typography>
          </Section>
        </Grid>
      </Grid>
    </Box>
  );
}
