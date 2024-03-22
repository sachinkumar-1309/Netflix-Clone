import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";

function EmailForm({ id }) {
  const [email, setEmail] = useState("");
  return (
    <div className="flex w-full">
      <form className="w-full">
        <div className="">
          <h3 className="text-lg mb-4 text-white">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
        </div>
        <div className="flex w-3/4 gap-2 ">
          <div className="w-4/5">
            <Input
              label="Email address"
              onChange={(e) => setEmail(e.target.value)}
              id={id}
              type="email"
              value={email}
              className={
                " pb-2 bg-neutral-700/40 border-[0.1px] h-full bg-none border-white/45 "
              }
              classNameLabel={"text-lg top-[8px] tracking-tighter"}
            />
          </div>
          <div className="w-1/5 object-contain ">
            <Button className=" h-full w-full text-xl  bg-[rgb(229, 9, 20)]">
              Get Started
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EmailForm;
