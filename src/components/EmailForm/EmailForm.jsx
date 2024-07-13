import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { useTranslation } from "react-i18next";

function EmailForm({ id }) {
	const { t } = useTranslation();
	const { readyToWatch, emailLabel, buttonText } = t("emailSection");

	const [email, setEmail] = useState("");
	return (
		<div className="flex w-full">
			<form className="w-full">
				<div className="">
					<h3 className="text-lg mb-4 text-white">
						{/* Ready to watch? Enter your email to create or restart your
            membership. */}
						{readyToWatch}
					</h3>
				</div>
				<div className="sm:flex lg:w-3/4 w-full gap-2 pb-3 sm:pb-0">
					<div className="sm:w-4/5 w-full mb-3">
						<Input
							// label="Email address"
							label={emailLabel}
							onChange={(e) => setEmail(e.target.value)}
							id={id}
							type="email"
							value={email}
							className={
								" pb- bg-neutral-700/40 border-[0.1px]  bg-none border-white/45 "
							}
							classNameLabel={"text-lg top-[8px] tracking-tighter"}
						/>
					</div>
					<div className="sm:w-2/5 w-1/2 md:w  object-contain ">
						<Button
							className={"w-full text-xl px-2 py-3 bg-[rgb(229, 9, 20)]"}>
							{/* Get Started */}
							{buttonText}
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default EmailForm;
