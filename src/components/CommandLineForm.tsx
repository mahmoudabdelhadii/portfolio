import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { RiExpandLeftRightFill } from "react-icons/ri";
import { StyledButton } from "./StyledButton";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  Fragment,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

const TerminalContact: React.FunctionComponent<any> = ({
  name,
  setIsCardOpened,
}: {
  name: string;
  setIsCardOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <section className="px-4 py-12 w-full">
      <div
        ref={containerRef}
        onClick={() => {
          inputRef.current?.focus();
        }}
        className="h-96 bg-slate-950/70 backdrop-blur rounded-lg w-full max-w-3xl mx-auto overflow-y-scroll shadow-xl cursor-text font-mono"
      >
        <TerminalHeader setIsCardOpened={setIsCardOpened} name={name} />
        <TerminalBody inputRef={inputRef} containerRef={containerRef} />
      </div>
    </section>
  );
};

export const TerminalHeader = ({
  name,
  setIsCardOpened,
}: {
  name: string;
  setIsCardOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="group w-full p-3 bg-slate-900 flex items-center gap-1 sticky top-0 ">
      <div
        className="w-3 h-3 rounded-full bg-red-500 flex justify-center items-center cursor-default"
        onClick={() => setIsCardOpened(false)}
      >
        <IoIosClose className="text-black hidden group-hover:block" />
      </div>
      <div
        className="w-3 h-3 rounded-full bg-yellow-500 flex justify-center items-center cursor-default"
        onClick={() => setIsCardOpened(false)}
      >
        <div className="bg-black h-[1px] w-[5px] hidden group-hover:block" />
      </div>
      <div className="w-3 h-3 rounded-full bg-green-500 justify-center items-center cursor-default">
        <RiExpandLeftRightFill
          size={12}
          className="text-black rotate-45 hidden group-hover:block"
        />
      </div>
      <span className="text-sm text-slate-200 font-semibold absolute left-[50%] -translate-x-[50%]">
        {name}
      </span>
    </div>
  );
};

const TerminalBody = ({ containerRef, inputRef }: TerminalBodyProps) => {
  const [focused, setFocused] = useState(false);
  const [text, setText] = useState("");

  const [questions, setQuestions] = useState(QUESTIONS);

  const curQuestion = questions.find((q) => !q.complete);

  const handleSubmitLine = (value: string) => {
    if (curQuestion) {
      setQuestions((pv) =>
        pv.map((q) => {
          if (q.key === curQuestion.key) {
            return {
              ...q,
              complete: true,
              value,
            };
          }
          return q;
        })
      );
    }
  };

  return (
    <div className="p-2 text-slate-100 text-lg">
      <InitialText />
      <PreviousQuestions questions={questions} />
      <CurrentQuestion curQuestion={curQuestion} />
      {curQuestion ? (
        <CurLine
          text={text}
          focused={focused}
          setText={setText}
          setFocused={setFocused}
          inputRef={inputRef}
          command={curQuestion?.key || ""}
          handleSubmitLine={handleSubmitLine}
          containerRef={containerRef}
        />
      ) : (
        <Summary questions={questions} setQuestions={setQuestions} />
      )}
    </div>
  );
};

const InitialText = () => {
  return (
    <>
      <p>Hey there! We're excited to link 🔗</p>
      <p className="whitespace-wrap md:whitespace-nowrap overflow-hidden font-light">
        ------------------------------------------------------------------------
      </p>
    </>
  );
};

const PreviousQuestions = ({ questions }: PreviousQuestionProps) => {
  return (
    <>
      {questions.map((q, i) => {
        if (q.complete) {
          return (
            <Fragment key={i}>
              <p>
                {q.text || ""}
                {q.postfix && (
                  <span className="text-violet-300">{q.postfix}</span>
                )}
              </p>
              <p className="text-emerald-300">
                <FiCheckCircle className="inline-block mr-2" />
                <span>{q.value}</span>
              </p>
            </Fragment>
          );
        }
        return <Fragment key={i}></Fragment>;
      })}
    </>
  );
};

const CurrentQuestion = ({ curQuestion }: CurrentQuestionProps) => {
  if (!curQuestion) return <></>;

  return (
    <p>
      {curQuestion.text || ""}
      {curQuestion.postfix && (
        <span className="text-violet-300">{curQuestion.postfix}</span>
      )}
    </p>
  );
};

const Summary = ({ questions, setQuestions }: SummaryProps) => {
  const [complete, setComplete] = useState(false);

  const handleReset = () => {
    setQuestions((pv) => pv.map((q) => ({ ...q, value: "", complete: false })));
  };

  const handleSend = () => {
    const formData = questions.reduce((acc, val) => {
      return { ...acc, [val.key]: val.value };
    }, {});

    // Send this data to your server or whatever :)
    console.log(formData);

    setComplete(true);
  };

  return (
    <>
      <p>Beautiful! Here's what we've got:</p>
      {questions.map((q) => {
        return (
          <p key={q.key}>
            <span className="text-blue-300">{q.key}:</span> {q.value}
          </p>
        );
      })}
      <p>Look good?</p>
      {complete ? (
        <p className="text-emerald-300">
          <FiCheckCircle className="inline-block mr-2" />
          <span>Sent! We'll get back to you ASAP 😎</span>
        </p>
      ) : (
        <div className="flex gap-4 mt-2">
          <StyledButton
            onClick={handleReset}
            className="px-3 py-1 text-base hover:opacity-90 transition-opacity !border-red rounded bg-slate-100 text-black"
          >
            Restart
          </StyledButton>
          <StyledButton
            onClick={handleSend}
            className="px-3 py-1 text-base hover:opacity-90 transition-opacity rounded bg-blue-500 text-white"
          >
            Send it!
          </StyledButton>
        </div>
      )}
    </>
  );
};

const CurLine = ({
  text,
  focused,
  setText,
  setFocused,
  inputRef,
  command,
  handleSubmitLine,
  containerRef,
}: CurrentLineProps) => {
  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmitLine(text);
    setText("");
    setTimeout(() => {
      scrollToBottom();
    }, 0);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    scrollToBottom();
  };

  useEffect(() => {
    return () => setFocused(false);
  }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          ref={inputRef}
          onChange={onChange}
          value={text}
          type="text"
          className="sr-only"
          autoComplete="off"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </form>
      <p>
        <span className="text-emerald-400">➜</span>{" "}
        <span className="text-cyan-300">~</span>{" "}
        {command && <span className="opacity-50">Enter {command}: </span>}
        {text}
        {focused && (
          <motion.span
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
              times: [0, 0.5, 0.5, 1],
            }}
            className="inline-block w-2 h-5 bg-slate-400 translate-y-1 ml-0.5"
          />
        )}
      </p>
    </>
  );
};

export default TerminalContact;

const QUESTIONS: QuestionType[] = [
  {
    key: "email",
    text: "To start, could you give us ",
    postfix: "your email?",
    complete: false,
    value: "",
  },
  {
    key: "name",
    text: "Awesome! And what's ",
    postfix: "your name?",
    complete: false,
    value: "",
  },
  {
    key: "description",
    text: "Perfect, and ",
    postfix: "how can we help you?",
    complete: false,
    value: "",
  },
];

interface CurrentLineProps {
  text: string;
  focused: boolean;
  setText: Dispatch<SetStateAction<string>>;
  setFocused: Dispatch<SetStateAction<boolean>>;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  command: string;
  handleSubmitLine: Function;
  containerRef: MutableRefObject<HTMLDivElement | null>;
}

type QuestionType = {
  key: string;
  text: string;
  postfix?: string;
  complete: boolean;
  value: string;
};

interface TerminalBodyProps {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  inputRef: MutableRefObject<HTMLInputElement | null>;
}

interface PreviousQuestionProps {
  questions: QuestionType[];
}

interface SummaryProps {
  questions: QuestionType[];
  setQuestions: Dispatch<SetStateAction<QuestionType[]>>;
}

interface CurrentQuestionProps {
  curQuestion: QuestionType | undefined;
}
