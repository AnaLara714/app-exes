import React, { createContext, ReactNode } from "react";

interface IActivity {
  id: number;
  title: string;
  description: string;
  link: string;
  createdBy: number;
  category: string;
  responsible: string;
  createdAt?: string;
  course?: string;
}

interface IActivityContextType {
  activities: IActivity[];
  addActivity: (newActivity: IActivity) => void;
  editActivity: (activity: IActivity) => void;
  deleteActivity: (id: number) => void;
}

const ActivityContext = createContext<IActivityContextType | undefined>(
  undefined
);

export const ActivityProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activities, setActivities] = React.useState<IActivity[]>([]);

  const addActivity = (newActivity: IActivity) => {
    setActivities([...activities, newActivity]);
  };

  const editActivity = (editActivity: IActivity) => {
    setActivities(
      activities.map((activity) =>
        activity.id === editActivity.id ? editActivity : activity
      )
    );
  };

  const deleteActivity = (id: number) => {
    setActivities(activities.filter((activity) => activity.id !== id));
  };
  console.log(activities);
  return (
    <ActivityContext.Provider
      value={{ activities, addActivity, editActivity, deleteActivity }}
    >
      {children}
    </ActivityContext.Provider>
  );
};

export const useActivities = () => {
  const context = React.useContext(ActivityContext);
  if (!context) {
    throw new Error("'useActivities must be used within an ActivityProvider'");
  }
  return context;
};
