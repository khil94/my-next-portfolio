"use client";
import { Project } from "@/constants/projects";
import Image from "next/image";
import { useEffect, useRef } from "react";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 모달이 열렸을 때 스크롤 방지
    if (project) {
      document.body.style.overflow = "hidden";
    }

    // 모달 외부 클릭 시 닫기
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    // ESC 키 누를 때 닫기
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-main-black/80 backdrop-blur-sm p-4">
      <div
        ref={modalRef}
        className="relative bg-main-light-black border border-neutral-700 rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-main-black/50 flex items-center justify-center text-neutral-300 hover:bg-accent-primary transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* 프로젝트 이미지 */}
        <div className="w-full h-64 md:h-80 relative">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-t-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-main-black/80"></div>
          <div className="absolute bottom-6 left-6">
            <h2 className="text-3xl font-bold text-white">{project.title}</h2>
          </div>
        </div>

        {/* 프로젝트 정보 */}
        <div className="p-6 space-y-6">
          {/* 태그 */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm rounded-full bg-accent-primary/10 text-accent-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 설명 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">프로젝트 개요</h3>
            <p className="text-neutral-300 leading-relaxed">
              {project.description}
            </p>

            {/* 추가 상세 내용은 project 객체에 추가 필드가 있다면 표시할 수 있습니다 */}
            {project.longDescription && (
              <p className="text-neutral-300 leading-relaxed whitespace-pre-wrap">
                {project.longDescription}
              </p>
            )}

            {/* 기능 목록 - 프로젝트 상세 정보에 features 배열이 있다면 표시 */}
            {project.features && project.features.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">주요 기능</h3>
                <ul className="list-disc list-inside space-y-1 text-neutral-300">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* 링크 버튼 */}
          <div className="flex flex-wrap gap-4 pt-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-neutral-800 text-neutral-200 hover:bg-accent-primary transition-colors flex items-center gap-2"
              >
                <span>GitHub</span>
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            )}
            {project.links.website && (
              <a
                href={project.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-neutral-800 text-neutral-200 hover:bg-accent-primary transition-colors flex items-center gap-2"
              >
                <span>웹사이트</span>
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
