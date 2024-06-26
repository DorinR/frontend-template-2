import { Route, Routes } from "react-router-dom";
import { App } from "../App";
import { Accordion, Section } from "../components/Accordion/Accordion";
import { Card } from "../components/Card/Card";
import { CommentsSection } from "../components/CommentsSection/CommentsSection";
import { COMMENTS_DATA } from "../components/CommentsSection/mockData";
import { FullScreenOverlay } from "../components/FullScreenOverlay/FullScreenOverlay";
import { IconBar } from "../components/IconBar/IconBar";
import { KanbanBoard } from "../components/KanbanBoard/KanbanBoard";
import { Tabs } from "../components/Tabs/Tabs";
import { ThreeColorSquare } from "../components/ThreeColorSquare/ThreeColorSquare";
import { DragAndDropExample } from "../experiments/DndExample/DragAndDropExample";
import { HooksVsFunctions } from "../experiments/HooksVsFunctions/HooksVsFunctions";
import { Account } from "../features/Account/Account";
import { Appointments } from "../features/Appointments/Appointments";
import { Login } from "../features/Authentication/Login/Login";
import { Register } from "../features/Authentication/Register/Register";
import { MainLayout } from "../features/Layout/MainLayout";
import { Reminders } from "../features/Reminders/Reminders";

export const ApplicationRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/account" element={<Account />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<Register />} />
        {/* UI Component Routes */}
        <Route path="/ui-components" element={<div>ui components</div>} />
        <Route path="/ui/icon-bar" element={<IconBar />} />
        <Route
          path="/ui/accordion"
          element={
            <Accordion>
              <Section
                sectionHeadingLabel="section 1"
                sectionContent="first section content"
              />
              <Section
                sectionHeadingLabel="section 2"
                sectionContent="second section content"
              />
              <Section
                sectionHeadingLabel="section 3"
                sectionContent="third section content"
              />
            </Accordion>
          }
        />
        <Route path="/ui/tabs" element={<Tabs />} />
        <Route path="/ui/full-screen-overlay" element={<FullScreenOverlay />} />
        <Route
          path="/ui/card"
          element={
            <Card
              title="Design new logo"
              content="Look for inspiration on websites like Stripe"
            />
          }
        />
        <Route
          path="/ui/kanban-board"
          element={
            <>
              <h2>Kanban Board</h2>
              <KanbanBoard />
            </>
          }
        />
        <Route
          path="/ui/three-color-square"
          element={
            <>
              <h2>Three Color Square</h2>
              <ThreeColorSquare />
            </>
          }
        />
        <Route
          path="/ui/comments-section"
          element={
            <>
              <h2>Comments Section</h2>
              <CommentsSection data={COMMENTS_DATA} />
            </>
          }
        />
        <Route
          path="/exp/hooks-v-functions"
          element={
            <>
              <h2>Hooks vs Functions</h2>
              <HooksVsFunctions />
            </>
          }
        />
        <Route
          path="/exp/dnd-example"
          element={
            <>
              <h2>DnD example</h2>
              <DragAndDropExample />
            </>
          }
        />
      </Routes>
    </MainLayout>
  );
};
