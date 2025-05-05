import React from "react";
import parse from "html-react-parser";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

type SectionProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

const Section = ({ title, subtitle, children }: SectionProps) => (
  <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6" color="primary" sx={{ color: "#36454f" }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {parse(subtitle)}
        </Typography>
      )}
    </Box>
    <Divider sx={{ mb: 2 }} />
    {children}
  </Paper>
);

const ChecklistSection = ({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) => (
  <Box sx={{ mb: 2 }}>
    <Typography
      variant="subtitle1"
      sx={{ fontWeight: "bold", color: "#36454f" }}
    >
      {heading}
    </Typography>
    <Typography variant="body2" sx={{ color: "#36454f" }}>
      {description}
    </Typography>
  </Box>
);

export function NarrativeWritingLesson() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ mb: 4, fontFamily: "Teacher", color: "#36454f" }}
      >
        Narrative Writing Revision
      </Typography>

      <DirectInstructionLesson />

      <Section
        title="Language Demands"
        subtitle="Specific ways that <em>academic language</em> is used in reading,
          writing, listening, and/or speaking."
      >
        <ChecklistSection
          heading="Language Function(s)"
          description="Identify: Students will identify the plot, setting, characters, problem and solution, text evidence from the source, and others from their narrative editing and revising checklist within their own narrative writing."
        />

        <ChecklistSection
          heading="Vocabulary"
          description="Narrative, Text evidence, Revise, Edit, Plot, Setting, Source"
        />

        <ChecklistSection
          heading="Discourse and/or Syntax"
          description="Discourse: Through whole group discussion and partner discussion, students will verbalize some things they could do to revise and edit their narrative. This gives other students within the group/class a chance to hear other ideas to help inform their thinking and support the thinking of the group. Students will collaborate in discussion using the lesson defined vocabulary."
        />

        <ChecklistSection
          heading="Planned Language Supports"
          description="Modeling of an activity will be used during guided practice. The teacher will model to students how they can use the narrative checklist to help them during their revision of their narrative."
        />
      </Section>

      <Section title="Instructional Strategies and Learning Tasks">
        <Typography variant="h6" sx={{ mt: 2, mb: 1, color: "#36454f" }}>
          Anticipatory Set
        </Typography>
        <Grid container spacing={5}>
          <Grid size={6}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "#36454f" }}
            >
              Activity Description/Teacher
            </Typography>
            <Typography variant="body2" sx={{ color: "#36454f" }}>
              The lesson will open by engaging students in a group discussion
              about their prior knowledge about the narrative checklist.
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "#36454f" }}
            >
              Student Actions
            </Typography>
            <Typography variant="body2" sx={{ color: "#36454f" }}>
              Students will participate in the whole group instruction and
              answer questions about narratives and the editing process.
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "#36454f" }}
            >
              Activity Description/Teacher
            </Typography>
            <Typography variant="body2" sx={{ color: "#36454f" }}>
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
          <Grid size={6}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "#36454f" }}
            >
              Student Actions
            </Typography>
            <Typography variant="body2" sx={{ color: "#36454f" }}>
              Students will participate in the whole group discussion on how the
              checklist will help them.
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="h6" sx={{ mt: 4, mb: 1, color: "#36454f" }}>
          Guided Practice
        </Typography>
        <Grid container spacing={5}>
          <Grid size={6}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "#36454f" }}
            >
              Activity Description/Teacher
            </Typography>
            <Typography variant="body2" sx={{ color: "#36454f" }}>
              While the students are in their groups of 2 or 3, the teacher will
              explain that they are going to pair up and read each other’s
              writing and then revise/edit their partner's story using the
              checklist.
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "#36454f" }}
            >
              Student Actions
            </Typography>
            <Typography variant="body2" sx={{ color: "#36454f" }}>
              Students will reread their narrative and look for areas that need
              revision or editing. Writers will pair up and share their stories
              and edit/revise their narrative using the checklist.
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="h6" sx={{ mt: 4, mb: 1, color: "#36454f" }}>
          Independent Student Practice
        </Typography>
        <Grid container spacing={5}>
          <Grid size={6}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "#36454f" }}
            >
              Activity Description/Teacher
            </Typography>
            <Typography variant="body2" sx={{ color: "#36454f" }}>
              During this activity, the teacher will circulate the room to
              ensure that the students are on task and engaged in the activity.
              While circulating, the teacher will ask the students questions
              about their work and offer feedback as needed.
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "#36454f" }}
            >
              Student Actions
            </Typography>
            <Typography variant="body2" sx={{ color: "#36454f" }}>
              Students will continue working on their narrative story.
            </Typography>
          </Grid>
        </Grid>
      </Section>
    </Box>
  );
}

export function DirectInstructionLesson() {
  return (
    <Box>
      <Section title="General Information">
        <Grid container spacing={2} gap={0}>
          <Grid size={12}>
            <Typography sx={{ color: "#36454f" }}>
              <strong>Lesson Title:</strong> Revise and Edit Narrative Writing
            </Typography>
            <Typography sx={{ color: "#36454f" }}>
              <strong>Subject(s):</strong> Writing
            </Typography>
          </Grid>
          <Grid size={12}>
            <Typography sx={{ color: "#36454f" }}>
              <strong>Grade/Level/Setting:</strong> This is a 5th Grade class
              consisting of 25 students, ages 10–11. There are 2 students with
              504 plans, 3 students who receive tier 2 level reading assistance,
              and 1 ELL student. Students are grouped into 4.
            </Typography>
          </Grid>
        </Grid>
      </Section>

      <Section title="Prerequisite Skills/Prior Knowledge">
        <Typography sx={{ color: "#36454f" }}>
          Students should have prior knowledge of On Demand Writing.
        </Typography>
        <Typography sx={{ color: "#36454f" }}>
          Students should have prior knowledge of what a Narrative writing is.
        </Typography>
      </Section>

      <Section title="Standards and Objectives">
        <Typography sx={{ color: "#36454f" }}>
          <strong>W.5.3:</strong> Write narratives to develop real or imagined
          experiences or events using effective technique, descriptive details,
          and clear event sequences.
        </Typography>
        <Typography sx={{ color: "#36454f" }}>
          <strong>W.5.5:</strong> With guidance and support from peers and
          adults, develop and strengthen writing as needed by planning,
          revising, editing, rewriting, or trying a new approach.
        </Typography>
      </Section>

      <Section title="Lesson Objective(s)">
        <Typography sx={{ color: "#36454f" }}>
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
              sx={{ color: "#36454f" }}
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
              ].map((item, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemText primary={item} sx={{ color: "#36454f" }} />
                </ListItem>
              ))}
            </List>
          </Section>
        </Grid>
        <Grid size={12}>
          <Section title="Technology">
            <Typography sx={{ color: "#36454f" }}>
              <strong>SAMR Level:</strong> Augmentation
            </Typography>
            <Typography sx={{ mt: 1, color: "#36454f" }}>
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

export function ScienceLesson() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ mb: 4, fontFamily: "Teacher", color: "#36454f" }}
      >
        Science Lesson
      </Typography>

      <Section
        title="Language Demands"
        subtitle="Specific ways that <em>academic language</em> is used in reading,
          writing, listening, and/or speaking."
      >
        <ChecklistSection
          heading="Language Function(s)"
          description="Identify: Students will identify the plot, setting, characters, problem and solution, text evidence from the source, and others from their narrative editing and revising checklist within their own narrative writing."
        />

        <ChecklistSection
          heading="Vocabulary"
          description="Narrative, Text evidence, Revise, Edit, Plot, Setting, Source"
        />

        <ChecklistSection
          heading="Discourse and/or Syntax"
          description="Discourse: Through whole group discussion and partner discussion, students will verbalize some things they could do to revise and edit their narrative. This gives other students within the group/class a chance to hear other ideas to help inform their thinking and support the thinking of the group. Students will collaborate in discussion using the lesson defined vocabulary."
        />

        <ChecklistSection
          heading="Planned Language Supports"
          description="Modeling of an activity will be used during guided practice. The teacher will model to students how they can use the narrative checklist to help them during their revision of their narrative."
        />
      </Section>

      <Section title="Instructional Strategies and Learning Tasks">
        <Typography variant="h6" sx={{ mt: 2, mb: 1, color: "#36454f" }}>
          Anticipatory Set
        </Typography>
        <Grid container spacing={5}>
          <Grid size={6}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "#36454f" }}
            >
              Activity Description/Teacher
            </Typography>
            <Typography variant="body2" sx={{ color: "#36454f" }}>
              The lesson will open by engaging students in a group discussion
              about their prior knowledge about the narrative checklist.
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "#36454f" }}
            >
              Student Actions
            </Typography>
            <Typography variant="body2" sx={{ color: "#36454f" }}>
              Students will participate in the whole group instruction and
              answer questions about narratives and the editing process.
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "#36454f" }}
            >
              Activity Description/Teacher
            </Typography>
            <Typography variant="body2" sx={{ color: "#36454f" }}>
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
          <Grid size={6}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "#36454f" }}
            >
              Student Actions
            </Typography>
            <Typography variant="body2" sx={{ color: "#36454f" }}>
              Students will participate in the whole group discussion on how the
              checklist will help them.
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="h6" sx={{ mt: 4, mb: 1, color: "#36454f" }}>
          Guided Practice
        </Typography>
        <Grid container spacing={5}>
          <Grid size={6}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "#36454f" }}
            >
              Activity Description/Teacher
            </Typography>
            <Typography variant="body2" sx={{ color: "#36454f" }}>
              While the students are in their groups of 2 or 3, the teacher will
              explain that they are going to pair up and read each other’s
              writing and then revise/edit their partner's story using the
              checklist.
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "#36454f" }}
            >
              Student Actions
            </Typography>
            <Typography variant="body2" sx={{ color: "#36454f" }}>
              Students will reread their narrative and look for areas that need
              revision or editing. Writers will pair up and share their stories
              and edit/revise their narrative using the checklist.
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="h6" sx={{ mt: 4, mb: 1, color: "#36454f" }}>
          Independent Student Practice
        </Typography>
        <Grid container spacing={5}>
          <Grid size={6}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "#36454f" }}
            >
              Activity Description/Teacher
            </Typography>
            <Typography variant="body2" sx={{ color: "#36454f" }}>
              During this activity, the teacher will circulate the room to
              ensure that the students are on task and engaged in the activity.
              While circulating, the teacher will ask the students questions
              about their work and offer feedback as needed.
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "#36454f" }}
            >
              Student Actions
            </Typography>
            <Typography variant="body2" sx={{ color: "#36454f" }}>
              Students will continue working on their narrative story.
            </Typography>
          </Grid>
        </Grid>
      </Section>
    </Box>
  );
}
