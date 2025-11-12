import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Avatar } from "@/components/ui/avatar";
import { useState, useEffect } from "react";

const Index = () => {
  const [currentComment, setCurrentComment] = useState(0);
  
  const comments = [
    "Когда включат отопление в доме на улице Ленина 25? Уже холодно!",
    "Спасибо за ремонт детской площадки в парке Победы!",
    "Предлагаю организовать субботник в микрорайоне Опалиха",
    "Нужен пешеходный переход около школы №17",
    "Отличная работа по благоустройству сквера у администрации!"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentComment((prev) => (prev + 1) % comments.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const aiRecommendations = [
    {
      title: "Социальная сфера",
      text: "Рекомендуется ускорить согласование строительства детского сада в мкр. Павшино",
      priority: "high"
    },
    {
      title: "ЖКХ",
      text: "Обратите внимание на увеличение обращений по теме отопления. Проведите проверку теплосетей",
      priority: "high"
    },
    {
      title: "Благоустройство",
      text: "Благоприятные погодные условия для завершения работ в парковых зонах",
      priority: "medium"
    }
  ];

  const documents = [
    {
      name: "Распоряжение №1247-р о благоустройстве",
      status: "ok",
      ai: "Документ оформлен корректно"
    },
    {
      name: "Постановление №456 о земельных участках",
      status: "warning",
      ai: "Обнаружена неточность в реквизитах адресата"
    },
    {
      name: "Приказ №892 о муниципальных закупках",
      status: "ok",
      ai: "Соответствует стандартам оформления"
    }
  ];

  const tasks = [
    {
      task: "Организация форума НКО",
      deadline: "15.11.2025",
      ai: "Рекомендуется начать оповещение участников сегодня"
    },
    {
      task: "Проверка готовности к отопительному сезону",
      deadline: "12.11.2025",
      ai: "Приоритетная задача - осталось 0 дней"
    },
    {
      task: "Подготовка отчета по НП",
      deadline: "20.11.2025",
      ai: "Можно делегировать профильному отделу"
    }
  ];

  const programs = [
    {
      event: "Ярмарка профессий",
      effect: "+320 участников",
      cost: "280 тыс. руб.",
      program: "Развитие образования"
    },
    {
      event: "Благоустройство парка Победы",
      effect: "+5000 м² зеленых зон",
      cost: "1.2 млн руб.",
      program: "Формирование комфортной городской среды"
    },
    {
      event: "Цифровизация МФЦ",
      effect: "-40% время ожидания",
      cost: "850 тыс. руб.",
      program: "Цифровая экономика"
    }
  ];

  const agents = [
    {
      name: "Администрация",
      events: ["Контроль исполнения поручений", "Координация работы департаментов", "Проведение совещаний"]
    },
    {
      name: "НКО",
      events: ["Организация ярмарки профессий", "Волонтерские мероприятия", "Социальные проекты"]
    },
    {
      name: "МСП",
      events: ["Благоустройство территорий", "Предоставление услуг населению", "Участие в тендерах"]
    }
  ];

  const wordsCloud = [
    { word: "Отопление", size: 48, weight: "bold" },
    { word: "Благоустройство", size: 32, weight: "semibold" },
    { word: "Дороги", size: 28, weight: "medium" },
    { word: "ЖКХ", size: 24, weight: "medium" },
    { word: "Парковки", size: 20, weight: "normal" },
    { word: "Образование", size: 24, weight: "medium" },
    { word: "Детсады", size: 20, weight: "normal" },
    { word: "Мусор", size: 18, weight: "normal" },
    { word: "Транспорт", size: 22, weight: "medium" },
    { word: "Освещение", size: 18, weight: "normal" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e3f2fd] via-[#f1f8ff] to-[#fce4ec] p-6">
      <div className="max-w-[1800px] mx-auto space-y-4">
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="https://cdn.poehali.dev/files/5424275a-9966-471f-b44d-e11412a0448f.png" 
              alt="Герб Красногорска"
              className="w-20 h-20 object-contain"
            />
            <div>
              <h1 className="text-3xl font-bold text-[#0EA5E9] tracking-tight">
                ИИ ПАНЕЛЬ организации общественно-политической работы
              </h1>
              <p className="text-xl text-[#ea384c] font-semibold mt-1">
                Городской Округ Красногорск
              </p>
            </div>
          </div>
          
          <Card className="bg-white/40 backdrop-blur-xl border-white/60 shadow-lg px-6 py-3 rounded-2xl">
            <div className="flex items-center gap-3">
              <Avatar className="w-12 h-12 bg-[#0EA5E9] text-white flex items-center justify-center text-lg font-semibold">
                ЗГ
              </Avatar>
              <div>
                <p className="font-semibold text-gray-800">Иванов И.И.</p>
                <p className="text-sm text-gray-600">Заместитель Главы Администрации</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="overflow-hidden bg-gradient-to-r from-[#0EA5E9]/20 to-[#ea384c]/20 backdrop-blur-sm border border-white/40 rounded-2xl p-3">
          <div className="animate-[slide-in-right_20s_linear_infinite]">
            <p className="text-sm text-gray-700 whitespace-nowrap">
              {comments.map((comment, idx) => (
                <span key={idx} className="mx-12">
                  💬 {comment}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <Card className="bg-white/40 backdrop-blur-xl border-white/60 shadow-xl rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Icon name="Sparkles" className="text-[#0EA5E9]" size={20} />
              <h2 className="font-bold text-gray-800 text-2xl">ИИ-рекомендации</h2>
            </div>
            <div className="space-y-2">
              {aiRecommendations.map((rec, idx) => (
                <div 
                  key={idx}
                  className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-xl p-3 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge 
                          variant={rec.priority === "high" ? "destructive" : "secondary"}
                          className="rounded-full text-xs"
                        >
                          {rec.priority === "high" ? "Высокий" : "Средний"}
                        </Badge>
                        <span className="font-semibold text-gray-800 text-sm">{rec.title}</span>
                      </div>
                      <p className="text-xs text-gray-700">{rec.text}</p>
                    </div>
                    <Icon name="ChevronRight" className="text-gray-400" size={16} />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-white/40 backdrop-blur-xl border-white/60 shadow-xl rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Icon name="TrendingUp" className="text-[#22c55e]" size={20} />
              <h2 className="font-bold text-gray-800 text-2xl">Наибольшие изменения</h2>
            </div>
            <div className="space-y-3">
              <div className="text-center p-4 bg-gradient-to-br from-[#22c55e]/20 to-[#22c55e]/5 rounded-xl">
                <p className="text-4xl font-bold text-[#22c55e]">+250</p>
                <p className="text-xs text-gray-600 mt-1">обращений граждан</p>
                <p className="text-[10px] text-gray-500">относительно октября</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-[#0EA5E9]/20 to-[#0EA5E9]/5 rounded-xl">
                <p className="text-4xl font-bold text-[#0EA5E9]">+180</p>
                <p className="text-xs text-gray-600 mt-1">исполненных поручений</p>
                <p className="text-[10px] text-gray-500">+45% к прошлому месяцу</p>
              </div>
            </div>
          </Card>

          <Card className="bg-white/40 backdrop-blur-xl border-white/60 shadow-xl rounded-2xl p-5 col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <Icon name="FileCheck" className="text-[#ea384c]" size={20} />
              <h2 className="text-lg font-bold text-gray-800">Ожидание подписания</h2>
            </div>
            <div className="space-y-2">
              {documents.map((doc, idx) => (
                <div 
                  key={idx}
                  className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-xl p-3"
                >
                  <div className="flex items-start gap-3">
                    <Icon 
                      name={doc.status === "ok" ? "CheckCircle2" : "AlertCircle"} 
                      className={doc.status === "ok" ? "text-[#22c55e]" : "text-[#ea384c]"} 
                      size={18}
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 text-xs">{doc.name}</p>
                      <p className="text-[10px] text-gray-600 mt-0.5 italic">✨ ИИ: {doc.ai}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card className="bg-white/40 backdrop-blur-xl border-white/60 shadow-xl rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Icon name="MessageSquare" className="text-[#0EA5E9]" size={20} />
              <h2 className="text-lg font-bold text-gray-800">Обращения граждан</h2>
            </div>
            <div className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-xl p-4 min-h-[180px] flex flex-wrap items-center justify-center gap-3">
              {wordsCloud.map((item, idx) => (
                <span
                  key={idx}
                  style={{ fontSize: `${item.size}px` }}
                  className={`font-${item.weight} text-gray-700 hover:text-[#0EA5E9] transition-colors cursor-pointer`}
                >
                  {item.word}
                </span>
              ))}
            </div>
          </Card>

          <Card className="bg-white/40 backdrop-blur-xl border-white/60 shadow-xl rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Icon name="ClipboardList" className="text-[#ea384c]" size={20} />
              <h2 className="text-lg font-bold text-gray-800">Поручения главы</h2>
            </div>
            <div className="space-y-2">
              {tasks.map((task, idx) => (
                <div 
                  key={idx}
                  className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-xl p-3 flex items-center justify-between"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-sm">{task.task}</p>
                    <p className="text-[10px] text-gray-600 mt-0.5 italic">✨ ИИ: {task.ai}</p>
                  </div>
                  <Badge variant="outline" className="ml-4 rounded-full text-xs">
                    📅 {task.deadline}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="bg-white/40 backdrop-blur-xl border-white/60 shadow-xl rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <Icon name="Link" className="text-[#22c55e]" size={20} />
            <h2 className="text-lg font-bold text-gray-800">Связь мероприятий Администрации с Госпрограммами</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left p-2 font-semibold text-gray-700 text-sm">Мероприятие</th>
                  <th className="text-left p-2 font-semibold text-gray-700 text-sm">Эффект</th>
                  <th className="text-left p-2 font-semibold text-gray-700 text-sm">Расходы</th>
                  <th className="text-left p-2 font-semibold text-gray-700 text-sm">Госпрограмма</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((prog, idx) => (
                  <tr 
                    key={idx}
                    className="border-b border-gray-200 hover:bg-white/40 transition-colors"
                  >
                    <td className="p-2 text-gray-800 text-sm">{prog.event}</td>
                    <td className="p-2 text-gray-700 text-sm">{prog.effect}</td>
                    <td className="p-2 text-gray-700 font-semibold text-sm">{prog.cost}</td>
                    <td className="p-2 text-gray-600 text-xs">{prog.program}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="bg-white/40 backdrop-blur-xl border-white/60 shadow-xl rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <Icon name="Users" className="text-[#0EA5E9]" size={20} />
            <h2 className="text-lg font-bold text-gray-800">Распределение задач по агентам</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {agents.map((agent, idx) => (
              <div 
                key={idx}
                className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-xl p-3"
              >
                <h3 className="font-bold text-base text-gray-800 mb-2 flex items-center gap-2">
                  <Icon name="Building2" className="text-[#0EA5E9]" size={18} />
                  {agent.name}
                </h3>
                <ul className="space-y-1.5">
                  {agent.events.map((event, eventIdx) => (
                    <li 
                      key={eventIdx}
                      className="text-xs text-gray-700 flex items-start gap-1.5"
                    >
                      <Icon name="ChevronRight" className="text-gray-400 mt-0.5" size={14} />
                      <span>{event}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-3 flex justify-center">
            <Button className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white rounded-full shadow-lg text-sm">
              <Icon name="Plus" size={18} className="mr-2" />
              Оценить возможность делегирования
            </Button>
          </div>
        </Card>

      </div>
    </div>
  );
};

export default Index;