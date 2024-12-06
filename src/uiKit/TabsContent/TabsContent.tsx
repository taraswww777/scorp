import classNames from "classnames";
import { ITabsContentProps } from "src/types/Tabs/Tabs";

export const TabsContent = ({ allTabs, openTabId }: ITabsContentProps) => {
  return (
    <div className="p-4 pt-6">
      {allTabs.map((el) => {
        return (
          <div
            key={el.id}
            className={classNames({
              hidden: openTabId !== el.id,
            })}
            role="tabpanel"
            tabIndex={0}
          >
            <section className="mb-14">
              <h3 className="text-3xl mb-6 font-semibold">Основное {el.id}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                voluptatem optio quae odio, libero animi mollitia nobis
                praesentium at dolores ad itaque nisi ab consectetur nostrum?
                Consequuntur repudiandae quas iusto.
              </p>
            </section>
            <section>
              <h3 className="text-3xl mb-6 font-semibold">Печать</h3>
              <ul className="list-disc ml-4">
                <li className="mb-3">123123123123123</li>
                <li className="mb-3">123123123</li>
                <li className="mb-3">123123123123123123123</li>
                <li className="mb-3">123123123123123</li>
              </ul>
            </section>
          </div>
        );
      })}
    </div>
  );
};
