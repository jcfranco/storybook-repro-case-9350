export default {
  title: "repro",
  parameters: {

    // multi-section notes (does not get picked up by @addon/docs)
    notes: {
      section1: "section 1 content",
      section2: "section 2 content"
    }

    // single notes (shows up in @addon/docs panel)
    // notes: "main section of notes"
  }
};

export const basic = () => `<div>😄</div>`;
